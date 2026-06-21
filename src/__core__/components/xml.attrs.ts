import { XLINK } from './xml.utils'
import { StyleSheet, ClassNames } from '../types'

const CSS_PROPERTIES = { __proto__: null } as unknown as Record<string, string>

let needInitCSSProperties = true
function initCSSProperties(): void {
  if (needInitCSSProperties) {
    needInitCSSProperties = false
    try {
      const RX = /^-[^-]+-/
      const CS = getComputedStyle(document.documentElement)
      for (let k in CS) {
        if (+k > -1) {
          k = CS[k]
          const origin = k.replace(RX, '')
          origin !== k && (CSS_PROPERTIES[origin] = k)
          // (k = CS[k]), (CSS_PROPERTIES[k.replace(RX, '')] = k)
        }
      }
    } catch {}
  }
}

const RX_DASH = /([A-Z])/g
const C2D = { __proto__: null } as unknown as Record<string, string>
let camel2dash = function (v: string): string {
  return (
    initCSSProperties(),
    (camel2dash = function (v: string): string {
      return v[0] === '-'
        ? v
        : (v =
              v in C2D
                ? C2D[v]
                : (C2D[v] = v.replace(RX_DASH, '-$1').toLowerCase())) in
            CSS_PROPERTIES
          ? CSS_PROPERTIES[v]
          : v
    })(v)
  )
}

function style2string(v: StyleSheet): string {
  switch (typeof v) {
    case 'string':
      return v // v[v.length - 1] === ';' ? v.slice(0, -1) : v
    case 'object': {
      const a: string[] = []
      if (Array.isArray(v)) {
        for (let c: string, i = 0, l = v.length; i < l; ++i) {
          if ((c = style2string(v[i]))) a.push(c)
        }
      } else if (v) {
        for (const k in v) {
          if (isValid((v as any)[k])) {
            a.push(camel2dash(k) + ':' + (v as any)[k])
          }
        }
      }
      return a.join(';')
    }
  }
  return ''
}
export { style2string as stylesheet }
// export function stylesheet(...styles: any[]) {
//   const res: any[] = []
//   for (let c: any, i = 0, l = styles.length; i < l; ++i)
//     if ((c = style2string(styles[i]))) res.push(c)
//   return res.join(';')
// }

function class2string(v: ClassNames): string {
  switch (typeof v) {
    case 'string':
      return v
    // case 'number':
    //   return v + ''
    // case 'bigint':
    //   return v + 'n'
    case 'object': {
      const a: string[] = []
      if (Array.isArray(v)) {
        for (let c: string, i = 0, l = v.length; i < l; ++i) {
          if ((c = class2string(v[i]))) a.push(c)
        }
      } else if (v) {
        for (const k in v) if (v[k]) a.push(k)
      }
      return a.join(' ')
    }
  }
  return ''
}
export { class2string as classnames }
// export function classnames(...classes: any[]) {
//   const res: any[] = []
//   for (let c: any, i = 0, l = classes.length; i < l; ++i)
//     if ((c = class2string(classes[i]))) res.push(c)
//   return res.join(' ')
// }

function isValid(v: any) {
  // return (
  //   v !== '' &&
  //   ((v = typeof v) === 'string' || v === 'number' || v === 'boolean')
  // )
  return v != null && v !== '' && typeof v !== 'object'
}

function xkey(k: string, n: number): string {
  return k[n] === '-' ? k.slice(n + 1) : k[n].toLowerCase() + k.slice(n + 1)
}

function setOrRemoveAttribute(
  node: HTMLElement | SVGElement,
  k: string,
  v: any
) {
  isValid(v) ? node.setAttribute(k, String(v)) : node.removeAttribute(k)
}

const XLINK_KEYS_CACHE = {
  __proto__: null,
} as unknown as Record<string, string>
function setOrRemoveAttributeNS(
  node: HTMLElement | SVGElement,
  k: string,
  v: any
) {
  k = XLINK_KEYS_CACHE[k] || (XLINK_KEYS_CACHE[k] = 'xlink:' + xkey(k, 5))
  isValid(v)
    ? node.setAttributeNS(XLINK, k, String(v))
    : node.removeAttributeNS(XLINK, k)
}

const DSA = {
  __proto__: null,
} as unknown as Record<string, Record<string, any>>
function dsa_get_descriptor(E: HTMLElement | SVGElement, k: string) {
  const lName = E.localName
  const nodeProps = DSA[lName] || (DSA[lName] = { __proto__: null })
  if (!(k in nodeProps)) {
    let r: PropertyDescriptor | undefined
    const getPrototypeOf = Object.getPrototypeOf
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    for (; (E = getPrototypeOf(E)) && !(r = getOwnPropertyDescriptor(E, k)); );
    nodeProps[k] = r && r.set
  }
  return nodeProps[k]
}
function setOrRemoveOtherProperties(
  node: HTMLElement | SVGElement,
  k: string,
  v: any
) {
  k in node && dsa_get_descriptor(node, k)
    ? (node[k as 'id'] = v)
    : setOrRemoveAttribute(node, k, v)
}

const RX_CAPTURE = /Capture$/
function setEventListener(
  node: HTMLElement | SVGElement,
  k: string,
  newFn: any,
  oldFn: any
) {
  if (RX_CAPTURE.test(k)) {
    k = k.slice(2, -7).toLowerCase()
    if (oldFn) node.removeEventListener(k, oldFn, true)
    if (newFn) node.addEventListener(k, newFn, true)
  } else {
    k = k.slice(2).toLowerCase()
    if (oldFn) node.removeEventListener(k, oldFn)
    if (newFn) node.addEventListener(k, newFn)
  }
}

const RX_EVENTS = /^on[A-Za-z]/
const RX_XLINKS = /^xlink[A-Z]/
export function setAttributes(
  node: HTMLElement | SVGElement,
  newAttrs: { [key: string]: any },
  oldAttrs: { [key: string]: any }
) {
  const resAttrs: { [key: string]: any } = { __proto__: null }
  let val: any
  for (let key in newAttrs) {
    if (key !== 'children' && key !== 'ref' && key !== 'key') {
      val = newAttrs[key]
      val === val || (val = null)
      if (key === 'style') {
        val = style2string(val)
        if (val !== oldAttrs.style) {
          node.style.cssText = val
          // setOrRemoveAttribute(node, key, val)
        }
      } else if (key === 'className' || key === 'class') {
        key = 'class'
        val = class2string(val)
        if (val !== oldAttrs.class) {
          setOrRemoveAttribute(node, key, val)
        }
      } else if (val !== oldAttrs[key]) {
        if (RX_EVENTS.test(key)) {
          setEventListener(node, key, val, oldAttrs[key])
        } else if (RX_XLINKS.test(key)) {
          setOrRemoveAttributeNS(node, key, val)
        } else {
          setOrRemoveOtherProperties(node, key, val)
        }
      }

      resAttrs[key] = val
      // delete oldAttrs[key]
    }
  }
  for (let key in oldAttrs) {
    if (!(key in resAttrs)) {
      if (RX_EVENTS.test(key)) {
        setEventListener(node, key, null, oldAttrs[key])
      } else if (RX_XLINKS.test(key)) {
        setOrRemoveAttributeNS(node, key, null)
      } else {
        setOrRemoveOtherProperties(node, key, null)
      }
    }
  }
  return resAttrs
}

export function removeEventListeners(
  node: HTMLElement | SVGElement,
  oldAttrs: { [key: string]: any } | null | undefined
) {
  if (oldAttrs) {
    for (let key in oldAttrs) {
      if (RX_EVENTS.test(key)) {
        setEventListener(node, key, null, oldAttrs[key])
      }
    }
  }
}
