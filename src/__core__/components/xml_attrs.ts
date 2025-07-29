import { NAMESPACES_URI } from './xml_utils'

const CSS_PROPERTIES: { [k: string]: string } = {}

let needInitCSSProperties = true
function initCSSProperties(): void {
  if (needInitCSSProperties) {
    needInitCSSProperties = false
    try {
      const RX = /^-[^-]+-/
      const CS = getComputedStyle(document.documentElement)
      for (let k in CS) {
        if (+k > -1) (k = CS[k]), (CSS_PROPERTIES[k.replace(RX, '')] = k)
      }
    } catch {}
  }
}

const REG_DASH = /([A-Z])/g
const C2D: { [key: string]: string } = {}
let camel2dash = function (v: string): string {
  return (
    initCSSProperties(),
    (camel2dash = function (v: string): string {
      return v[0] === '-'
        ? v
        : CSS_PROPERTIES.hasOwnProperty(
              (v = C2D.hasOwnProperty(v)
                ? C2D[v]
                : (C2D[v] = v.replace(REG_DASH, '-$1').toLowerCase()))
            )
          ? CSS_PROPERTIES[v]
          : v
    })(v)
  )
}

export function style2string(v: any): string {
  switch (typeof v) {
    case 'string':
      return v
    case 'object': {
      const a: string[] = []
      if (Array.isArray(v)) {
        for (let c: string, i = 0; i < v.length; i++) {
          if ((c = style2string(v[i])))
            a.push(c[c.length - 1] === ';' ? c.slice(0, -1) : c)
        }
      } else if (v) {
        for (const k in v) {
          if (v[k] != null) a.push(camel2dash(k) + ':' + v[k])
        }
      }
      return a.join(';')
    }
    default:
      return ''
  }
}

export function class2string(v: any): string {
  switch (typeof v) {
    case 'string':
      return v
    case 'object': {
      const a: string[] = []
      if (Array.isArray(v)) {
        for (let c: string, i = 0; i < v.length; i++) {
          if ((c = class2string(v[i]))) a.push(c)
        }
      } else if (v) {
        for (const k in v) if (v[k]) a.push(k)
      }
      return a.join(' ')
    }
    default:
      return ''
  }
}

function isValid(v: any) {
  // return (
  //   v !== '' &&
  //   ((v = typeof v) === 'string' || v === 'number' || v === 'boolean')
  // )
  return v != null && v !== ''
}

function xkey(k: string, n: number): string {
  return k[n] === '-' ? k.slice(n + 1) : k[n].toLowerCase() + k.slice(n + 1)
}

function setOrRemoveAttribute(
  node: HTMLElement | SVGElement,
  k: string,
  v: any
) {
  node[isValid(v) ? 'setAttribute' : 'removeAttribute'](k, '' + v)
}

function setOrRemoveAttributeNS(
  node: HTMLElement | SVGElement,
  k: string,
  v: any
) {
  node[isValid(v) ? 'setAttributeNS' : 'removeAttributeNS'](
    NAMESPACES_URI.xlink,
    'xlink:' + xkey(k, 5),
    '' + v
  )
}

const DSA: { [key: string]: { [key: string]: any } } = {}
function dsa_get_descriptor(lName: string, k: string, E: any) {
  const nodeProps = DSA[lName] || (DSA[lName] = {})
  if (!nodeProps.hasOwnProperty(k)) {
    const getPrototypeOf = Object.getPrototypeOf
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    let r: PropertyDescriptor | undefined
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
  k in node && dsa_get_descriptor(node.localName, k, node)
    ? (node[k as 'id'] = v)
    : setOrRemoveAttribute(node, k, v)
}

const REG_CAPTURE = /Capture$/
function setEventListener(
  node: HTMLElement | SVGElement,
  k: string,
  newFn: any,
  oldFn: any
) {
  if (newFn !== oldFn) {
    if (REG_CAPTURE.test(k)) {
      k = k.slice(2, -7).toLocaleLowerCase()
      if (oldFn) node.removeEventListener(k, oldFn, true)
      if (newFn) node.addEventListener(k, newFn, true)
    } else {
      k = k.slice(2).toLocaleLowerCase()
      if (oldFn) node.removeEventListener(k, oldFn)
      if (newFn) node.addEventListener(k, newFn)
    }
  }
}

const REG_EVENTS = /^on[A-Z][a-z]/
const REG_XLINKS = /^xlink[A-Z][a-z]/
export function setAttributes(
  node: HTMLElement | SVGElement,
  newAttrs: { [key: string]: any },
  oldAttrs: { [key: string]: any }
) {
  const resAttrs: { [key: string]: any } = {}
  let val: any
  for (let key in newAttrs) {
    if (key !== 'ref' && key !== 'children') {
      val = newAttrs[key]
      val === val || (val = null)
      if (key === 'style') {
        val = style2string(val)
        if (oldAttrs[key] !== val) {
          setOrRemoveAttribute(node, key, val)
        }
      } else if (key === 'className' || key === 'class') {
        key = 'class'
        val = class2string(val)
        if (oldAttrs[key] !== val) {
          setOrRemoveAttribute(node, key, val)
        }
      } else if (REG_EVENTS.test(key)) {
        setEventListener(node, key, val, oldAttrs[key])
      } else if (REG_XLINKS.test(key)) {
        if (oldAttrs[key] !== val) {
          setOrRemoveAttributeNS(node, key, val)
        }
      } else {
        if (oldAttrs[key] !== val) {
          setOrRemoveOtherProperties(node, key, val)
        }
      }
      resAttrs[key] = val
      delete oldAttrs[key]
    }
  }
  for (let key in oldAttrs) {
    if (REG_EVENTS.test(key)) {
      setEventListener(node, key, null, oldAttrs[key])
    } else if (REG_XLINKS.test(key)) {
      setOrRemoveAttributeNS(node, key, null)
    } else {
      setOrRemoveOtherProperties(node, key, null)
    }
  }
  return resAttrs
}

export function removeEventListeners(
  node: HTMLElement | SVGElement,
  oldAttrs: { [key: string]: any } | null | undefined
) {
  if (oldAttrs)
    for (let key in oldAttrs) {
      if (REG_EVENTS.test(key)) {
        setEventListener(node, key, null, oldAttrs[key])
        delete oldAttrs[key]
      }
    }
  return oldAttrs
}
