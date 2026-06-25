import * as fs from 'fs'
import * as url from 'url'
import * as path from 'path'

import { transform as sucrase } from 'sucrase'

import { css, hash } from 'rease'
import * as sass from 'sass'
import less from 'less'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import { optimize as svgo } from 'svgo'
// console.log(autoprefixer)

// import css from 'rollup-plugin-css-only'
import alias from '@rollup/plugin-alias'
import inject from '@rollup/plugin-inject'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import rollupLivereload from 'rollup-plugin-livereload'

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

;(() => {
  const opts = { recursive: true }
  function from(packageJsonDir = '', dir = '') {
    let file, filename
    try {
      file = require.resolve(packageJsonDir + '/package.json')
    } catch {
      file = require.resolve(packageJsonDir)
    }

    while (
      (filename = path.basename((file = path.dirname(file)))) &&
      filename !== packageJsonDir
    );

    if (!filename) throw packageJsonDir

    // return path.join(
    //   path.dirname(require.resolve(packageJsonDir + '/package.json')),
    //   dir
    // )
    return path.join(file, dir)
  }
  /** @param {string[]} dirs */
  function to(...dirs) {
    return path.join(...dirs)
  }

  const buildDir = 'app/build'
  if (fs.existsSync(buildDir)) {
    // fs.rmSync(buildDir, opts)
    fs.readdirSync(buildDir).forEach((v) => {
      fs.rmSync(path.join(buildDir, v), opts)
    })
  } else {
    fs.mkdirSync(buildDir, { recursive: true })
  }

  // copy three to app/js
  // fs.cpSync(from('three', 'build'), to('app/js', 'three'), opts)
  // copy bootstrap to app/css
  fs.cpSync(from('bootstrap', 'dist/css'), to('app/css', 'bs'), opts)
  // copy bootstrap-icons to app/css
  fs.cpSync(from('bootstrap-icons', 'font'), to('app/css', 'bi'), opts)
})()

let needUpdateIndexHtml = true
const INDEX_HTML = fs.readFileSync(
  path.resolve(__dirname, 'src/index.html'),
  'utf8'
)
/** @type {{ [key: string]: { id: string, css: string } }} */
const STYLE_MAP = {}
/** @type {{ [key: string]: string }} */
const SVG_MAP = {}

const VERSION = hash()

const production = !process.env.ROLLUP_WATCH
const livereload = !production && rollupLivereload({ watch: 'app', delay: 999 })

/** @type { import('rollup').RollupOptions } */
const appConfig = {
  input: { index: 'src/index.tsx' },
  // output: {
  //   sourcemap: false,
  //   format: 'iife',
  //   name: 'app',
  //   file: `app/js/build.js`,
  // },
  // external: ['three'],
  output: {
    // globals: { three: 'THREE' },

    sourcemap: false,
    compact: true,
    format: 'system', // 'module',
    dir: `app/build`,
    // chunkFileNames: 'chunks/[name]-[hash].js',
    manualChunks(id) {
      const match = id.match(/\/node_modules\/(three[^]*)/)
      if (match) {
        // console.log(match[1])
        return production ? path.dirname(match[1]) : match[1]
      }
      if (id.includes('/node_modules/three')) {
        return 'three'
      }
    },
  },
  plugins: [
    alias({
      entries: [
        { find: /^@\/(.+)$/, replacement: path.resolve(__dirname, 'src/$1') },
      ],
    }),
    {
      name: 'svg-custom',
      transform(code, id) {
        const matches = id.match(/\.(svg)$/)
        if (matches) {
          code = svgo(code).data.replace(/\:\#000/g, `:'currentColor'`)
          // console.log(code)
          let svgID = hash(id)
          if (!production)
            svgID += '_' + path.basename(id).slice(0, -4).replace(/[\W]+/g, '')

          const svg =
            `<symbol id="${svgID}"` +
            code.slice(5, -4).replace(/[^]*?(viewBox="[^"]+")[^>]*/, ' $1') +
            'symbol>'

          SVG_MAP[id] = svg

          const bundle =
            `<svg xmlns="http://www.w3.org/2000/svg">\n\n` +
            Object.entries(SVG_MAP)
              .map(([k, v]) => {
                return `  <!-- ${path.relative(__dirname, k)} -->\n  ${v}`
              })
              .join('\n\n') +
            '\n\n</svg>'
          const svgPath = `/build/icons.svg`

          fs.writeFileSync(`app${svgPath}`, bundle)

          return `export default ${JSON.stringify(
            `${svgPath}?${production ? VERSION : hash()}#${svgID}`
          )}`
        }
        return null
      },
    },
    {
      name: 'css-custom',
      async transform(code, id) {
        const matches = id.match(/\.(css|less|s[ca]ss)$/)
        if (matches) {
          const syntax = matches[1]
          if (syntax === 'less') {
            code = (await less.render(code)).css
          } else if (syntax === 'scss' || syntax === 'sass') {
            code = (
              await sass.compileStringAsync(code, {
                syntax: syntax === 'scss' ? 'scss' : 'indented',
              })
            ).css
          }

          const style = css([code])

          /** @type {(value: string) => void} */
          let resolve
          const promise = new Promise((res) => (resolve = res))
          postcss([
            autoprefixer({ overrideBrowserslist: ['last 9 versions', '> 9%'] }),
          ])
            .process(style.css, { from: void 0 })
            .then((result) => void resolve(result.css))

          // @ts-ignore
          style.css = await promise
          STYLE_MAP[id] = style

          fs.writeFileSync(
            'app/build/style.css',
            Object.entries(STYLE_MAP)
              .map(([k, v]) => {
                return `/* ${v.id} - ${path.relative(__dirname, k)} */\n${v.css}`
              })
              .join('\n\n')
          )

          // if (!(id in STYLE_MAP)) {
          //   needUpdateIndexHtml = true
          // }
          // fs.mkdirSync('app/build/css', { recursive: true })
          // fs.writeFileSync(
          //   path.join('app/build/css', `${style.id}.css`),
          //   style.css
          // )

          /** @type {{ [key: string]: string }} */
          const classes = {}
          // @ts-ignore
          for (const k in style) if (k[0] === '_') classes[k] = style[k]

          return `export default ${JSON.stringify(classes)}`
        }
        return null
      },
    },
    replace({
      preventAssignment: true,
      values: {
        'process.env.DEV': JSON.stringify(!production),
        'process.env.NODE_ENV': JSON.stringify(
          production ? 'production' : 'dev'
        ),
      },
    }),
    {
      name: 'sucrase-custom',
      transform(code, id) {
        if (/\.[mc]?tsx?$/.test(id)) {
          try {
            code = sucrase(code, {
              transforms: ['jsx', 'typescript'],
              production: true,
              jsxRuntime: 'automatic', // "classic" | "automatic" | "preserve"
              jsxImportSource: 'heract',
              jsxPragma: 'heract.createElement',
              jsxFragmentPragma: 'heract.Fragment',
            }).code
          } catch (e) {
            console.error('sucrase-custom')
            console.error(e)
          }
          return { code }
        }
        return null
      },
    },

    (() => {
      // const heract = path.resolve('../dist')
      const heract = 'heract'
      return inject({
        // 'React.createElement': [heract, 'createElement'],
        // 'jsxRuntime': [heract, 'jsxRuntime'],
        // 'jsxRuntime.jsxs': [heract, 'createElement'],
        // 'jsxRuntime.jsx': [heract, 'createElement'],
        // 'React.Fragment': [heract, 'Fragment'],

        R: [heract, '*'],

        'THREE.WebGPU': ['three/webgpu', '*'],
        'THREE.TSL': ['three/tsl', '*'],
        THREE: ['three', '*'],

        UI: [path.resolve(__dirname, 'src/ui'), '*'],
        Three: [path.resolve(__dirname, 'src/ui/Three'), '*'],
      })
    })(),
    // inject({ THREE: ['three/webgpu', '*'] }),
    // inject({ THREE: ['three/tsl', '*'] }),
    // inject({ THREE: ['three', '*'] }),

    resolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),

    livereload,
    {
      name: 'write-bundle',
      writeBundle(data) {
        if (needUpdateIndexHtml) {
          needUpdateIndexHtml = false
          const indexHtml = INDEX_HTML.replace(
            /(="build\/[^"]+)/g,
            `$1?${VERSION}`
          )

          fs.writeFileSync('app/index.html', indexHtml)
        }
      },
    },
  ],
  watch: { clearScreen: false },
}

/** @type { import('rollup').RollupOptions } */
const externalConfig = {
  input: { three: 'src/external/three.ts' },
  output: {
    sourcemap: true,
    // format: 'iife',
    compact: true,
    // name: 'extra',
    format: 'module',
    dir: `app/build`,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),
  ],
}
// [threeConfig, appConfig]
export default appConfig
