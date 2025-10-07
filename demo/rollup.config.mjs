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

  fs.rmSync(path.join('app/build'), opts)

  // copy bootstrap to app/css
  fs.cpSync(from('bootstrap', 'dist/css'), to('app/css', 'bs'), opts)
  // copy bootstrap-icons to app/css
  fs.cpSync(from('bootstrap-icons', 'font'), to('app/css', 'bi'), opts)
})()

const production = !process.env.ROLLUP_WATCH
const livereload = !production && rollupLivereload({ watch: 'app', delay: 999 })

/** @type { import('rollup').RollupOptions } */
const config = {
  input: { index: 'src/app/index.tsx' },
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
              jsxRuntime: 'classic', // "classic" | "automatic" | "preserve"
              // jsxImportSource: 'rease',
              // jsxPragma: 'rease.h',
              // jsxFragmentPragma: 'rease.ReaseFragment'
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
      // const barelyReact = path.resolve('../dist')
      const barelyReact = 'barely-react'
      return inject({
        'React.createElement': [barelyReact, 'createElement'],
        // 'jsxRuntime': [barelyReact, 'jsxRuntime'],
        // 'jsxRuntime.jsxs': [barelyReact, 'createElement'],
        // 'jsxRuntime.jsx': [barelyReact, 'createElement'],
        'React.Fragment': [barelyReact, 'Fragment'],
        
        R: [barelyReact, '*'],
      })
    })(),

    resolve({
      browser: true,
      preferBuiltins: false,
      // dedupe: ['svelte'],
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),

    livereload,
  ],
  watch: { clearScreen: false },
}

export default config
