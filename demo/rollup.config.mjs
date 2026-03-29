import * as fs from 'fs'
import * as url from 'url'
import * as path from 'path'

import { transform as sucrase } from 'sucrase'

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
    return path.join(
      path.dirname(require.resolve(packageJsonDir + '/package.json')),
      dir
    )
  }
  /** @param {string[]} dirs */
  function to(...dirs) {
    return path.join(...dirs)
  }

  if (fs.existsSync('app/build')) fs.rmSync('app/build', opts)

  // copy bootstrap to app/css
  fs.cpSync(from('bootstrap', 'dist/css'), to('app/css', 'bs'), opts)
  // copy bootstrap-icons to app/css
  fs.cpSync(from('bootstrap-icons', 'font'), to('app/css', 'bi'), opts)
})()

const production = !process.env.ROLLUP_WATCH
const livereload = !production && rollupLivereload({ watch: 'app', delay: 999 })

/** @type { import('rollup').RollupOptions } */
const config = {
  input: { index: 'src/index.tsx' },
  // output: {
  //   sourcemap: false,
  //   format: 'iife',
  //   name: 'app',
  //   file: `app/js/build.js`,
  // },
  output: {
    sourcemap: false,
    compact: true,
    format: 'module',
    dir: `app/build`,
  },
  plugins: [
    alias({
      entries: [
        { find: /^@\/(.+)$/, replacement: path.resolve(__dirname, 'src/$1') },
      ],
    }),
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
      })
    })(),

    resolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),

    livereload,
  ],
  watch: { clearScreen: false },
}

export default config
