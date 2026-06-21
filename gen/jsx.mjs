console.log('jsx')
import * as fs from 'fs'
import * as url from 'url'
import * as path from 'path'
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const IS_DEV = process.execArgv[0] === '--inspect'

/**
 *
 * @param {string} text
 */
function saveIntristicElementsToFile(text) {
  const dir = path.resolve(__dirname, '../src/__core__/types/generated')
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.resolve(dir, 'IntristicElements.ts'), text)
}

import { svgElementAttributes } from 'svg-element-attributes'
import { htmlElementAttributes } from 'html-element-attributes'
import puppeteer from 'puppeteer'

import {
  SVGElementTagNameMap,
  HTMLElementTagNameMap,
  MathMLElementTagNameMap,
  GlobalEventHandlers,
  GlobalEventHandlersEventMap,
} from './lib.dom.mjs'

// console.log(svgElementAttributes)
// console.log(htmlElementAttributes)

// import { JSDOM } from 'jsdom'
// const dom = new JSDOM(``)
// const window = dom.window
// const document = window.document
// createIntristicElements(
//   svgElementAttributes,
//   htmlElementAttributes,
//   SVGElementTagNameMap,
//   HTMLElementTagNameMap,
//   MathMLElementTagNameMap,
//   GlobalEventHandlers
// )

/**
 *
 * @param {Record<string, string[]>} svgElementAttributes
 * @param {Record<string, string[]>} htmlElementAttributes
 * @param {Record<string, string>} SVGElementTagNameMap
 * @param {Record<string, string>} HTMLElementTagNameMap
 * @param {Record<string, string>} MathMLElementTagNameMap
 * @param {Record<string, string>} GlobalEventHandlers
 * @param {Record<string, string>} GlobalEventHandlersEventMap
 */
function createIntristicElements(
  svgElementAttributes,
  htmlElementAttributes,
  SVGElementTagNameMap,
  HTMLElementTagNameMap,
  MathMLElementTagNameMap,
  GlobalEventHandlers,
  GlobalEventHandlersEventMap
) {
  const TEST_VALUE = [1]
  const TEMP_GlobalEventHandlersEventMap = { ...GlobalEventHandlersEventMap }
  function noop() {}
  /** @param {object} obj */
  function getObjectNameOrigin(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
  }
  /** @param {object} obj */
  function getObjectNameWithIntristic(obj) {
    return 'Intristic' + getObjectNameOrigin(obj)
  }
  /** @param {string} str */
  function toCapitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  /** @param {string} str */
  function keyToString(str) {
    return str[0] === '[' || /^[$_a-z][$\w]*$/i.test(str)
      ? str
      : JSON.stringify(str)
  }
  /** @param {string} str */
  function camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  }

  /** @type {{ [key: string]: { extend: string, props: { [key: string]: string } } }} */
  const ELEMENTS = {}
  /** @type {{ [key: string]: string } }} */
  const TAGS_MAP = {}

  createSchema(
    'IntrinsicHTMLElementTagNameMap',
    HTMLElementTagNameMap,
    '',
    htmlElementAttributes
  )
  createSchema(
    'IntrinsicSVGElementTagNameMap',
    SVGElementTagNameMap,
    'http://www.w3.org/2000/svg',
    svgElementAttributes
  )
  createSchema(
    'IntrinsicMathMLElementTagNameMap',
    MathMLElementTagNameMap,
    'http://www.w3.org/1998/Math/MathML'
  )

  /**
   *
   * @param {string} interfaceName
   * @param {Record<string, any>} map
   * @param {string} [namespaceUri]
   * @param {Record<string, string[]>} [attributes]
   */
  function createSchema(interfaceName, map, namespaceUri, attributes) {
    const getPrototypeOf = Object.getPrototypeOf
    const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors

    for (const tagName of Object.keys(map)) {
      /** @type {{ [key: string]: any }} */
      const element = namespaceUri
        ? document.createElementNS(namespaceUri, tagName)
        : document.createElement(tagName)
      // console.log(tagName, element)

      /** @type {{ [key: string]: string[] }} */
      const protos = {}

      if (attributes) {
        const tag = toCapitalize(tagName)
        // if (Array.isArray(attributes[tagName])) {
        //   protos[getObjectName(element) + 'For' + tag] =
        //     attributes[tagName].slice(0)
        // }
        const additional = (attributes['*'] || []).slice(0)
        if (Array.isArray(attributes[tagName])) {
          additional.push.apply(additional, attributes[tagName])
        }
        protos[getObjectNameWithIntristic(element) + 'Extra'] = additional
      }

      let proto = element
      for (; (proto = getPrototypeOf(proto)); ) {
        if (proto === Object.prototype) break
        /** @type {string[]} */
        const sets = []
        const props = getOwnPropertyDescriptors(proto)
        for (const key in props) {
          if (
            typeof props[key].set === 'function' &&
            (element[key] == null || typeof element[key] !== 'object')
          ) {
            sets.push(key)
          }
        }
        if (sets.length) {
          protos[getObjectNameWithIntristic(proto)] = sets
        }
      }

      // console.log(protos)

      /** @type {{ [key: string]: true }} */
      const cacheAttrs = {
        ref: true,
        style: true,
        class: true,
        className: true,
        children: true,
        xmlns: true,
        xmlnsXlink: true,
      }
      for (const key of Object.keys(protos).reverse()) {
        protos[key] = protos[key].filter((v) => {
          const is = cacheAttrs[v] !== true
          cacheAttrs[v] = true
          cacheAttrs[v.toLowerCase()] = true
          cacheAttrs[camelToKebab(v)] = true
          return is
        })
        if (!protos[key].length) {
          delete protos[key]
        }
      }

      let extend = ''
      for (const key of Object.keys(protos).reverse()) {
        const data = ELEMENTS[key] || (ELEMENTS[key] = { extend, props: {} })
        if (data.extend !== extend) {
          throw new Error(`Extend not valid: ${data.extend} !== ${extend}`)
        }
        const props = data.props
        const nameOrigin = key.slice(9)
        // console.log(nameOrigin)
        for (let propName of protos[key]) {
          try {
            element[propName] = TEST_VALUE
          } catch {}
          if (element[propName] === TEST_VALUE) {
            try {
              element[propName] = noop
            } catch {}
          }

          const type = typeof element[propName]
          // if (element[propName] != null && type === 'object') continue
          props[propName] || (props[propName] = 'any')
          switch (type) {
            case 'undefined':
            case 'object':
              break
            case 'function':
              if (
                props[propName] === 'any' &&
                element[propName] === noop &&
                propName.indexOf('on') === 0
              ) {
                delete props[propName]
                const ev =
                  // @ts-ignore
                  GlobalEventHandlers[propName] ||
                  // @ts-ignore
                  GlobalEventHandlersEventMap[propName.slice(2)] ||
                  'Event'
                // const el = map[tagName]
                propName = propName.slice(2)

                if (propName in TEMP_GlobalEventHandlersEventMap) {
                  delete TEMP_GlobalEventHandlersEventMap[propName]
                }

                propName = `on${propName[0].toUpperCase()}${propName.slice(1)}`
                props[`${propName}Capture`] = props[propName] =
                  `((this: T, ev: ${ev}) => any) | null`
              }
              break
            default:
              if (props[propName] === 'any') props[propName] = type
              else if (!props[propName].includes(type))
                props[propName] += ' | ' + type
          }
        }

        extend = key
      }
      // ELEMENTS[extend].props[`[key: string]`] = 'any'

      if (!TAGS_MAP[tagName]) {
        TAGS_MAP[tagName] = extend
      } else {
        TAGS_MAP[tagName] = `${TAGS_MAP[tagName]} | ${extend}`
      }

      // break
    }
  }

  console.log(ELEMENTS)

  if (ELEMENTS.IntristicElement) {
    const props = ELEMENTS.IntristicElement.props
    for (let propName in TEMP_GlobalEventHandlersEventMap) {
      const ev = TEMP_GlobalEventHandlersEventMap[propName]
      propName = `on${propName[0].toUpperCase()}${propName.slice(1)}`
      props[`${propName}Capture`] = props[propName] =
        `((this: T, ev: ${ev}) => any) | null`
    }
  }

  // console.log(TAGS_MAP)
  let res = `import { Ref, StyleSheet, ClassNames } from '../index';\n\n`

  for (const key in ELEMENTS) {
    const data = ELEMENTS[key]
    const props = data.props
    const extend = data.extend
    res += `interface ${key}`
    if (!/Extra$/.test(key)) res += `<T = ${key.slice(9)}>`
    if (extend) {
      res += ` extends ${extend}`
      if (!/Extra$/.test(key)) res += `<T>`
    }
    res += ' {\n'

    if (!extend) {
      res += `  ref?: Ref<T | null | undefined>;
  style?: StyleSheet;
  className?: ClassNames;
  class?: string;
  children?: any;
  xmlns?: string;
  // xmlnsXlink?: string;
  [key: \`\${'data-' | 'aria-' | 'xlink'}\${string}\`]: any;
`
    }

    for (const prop in props) {
      res += `  ${keyToString(prop)}?: ${props[prop]};\n`
    }

    res += '}\n\n'
  }

  res += `export interface IntrinsicElements {\n`
  for (const tag in TAGS_MAP) {
    res += `  ${keyToString(tag)}: ${TAGS_MAP[tag]};\n`
  }
  res += '}\n'
  // console.log(res)
  return res
}

async function run() {
  const browser = await puppeteer.launch({
    headless: !IS_DEV,
    devtools: true,
    defaultViewport: {
      width: 800,
      height: 800,
      hasTouch: true,
      isMobile: false,
    },
  })
  const page = await browser.newPage()
  const data = await page.evaluate(
    createIntristicElements,
    svgElementAttributes,
    htmlElementAttributes,
    SVGElementTagNameMap,
    HTMLElementTagNameMap,
    MathMLElementTagNameMap,
    GlobalEventHandlers,
    GlobalEventHandlersEventMap
  )
  IS_DEV || (await browser.close())
  // console.log(data)
  saveIntristicElementsToFile(data)
}
run()
