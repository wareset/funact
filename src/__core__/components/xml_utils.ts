// https://developer.mozilla.org/ru/docs/Web/SVG/Element/foreignObject
const __uri__ = 'http://www.w3.org/'
export const NAMESPACES_URI = {
  // _   : __uri__ + '1999/xhtml',
  svg: __uri__ + '2000/svg',
  math: __uri__ + '1998/Math/MathML',
  xlink: __uri__ + '1999/xlink',
} as const

export function createElementNS(
  tagName: string,
  parentNode: HTMLElement | SVGElement
) {
  return document.createElementNS(
    NAMESPACES_URI.hasOwnProperty(tagName)
      ? NAMESPACES_URI[tagName as 'svg']
      : (parentNode && parentNode.localName !== 'foreignObject'
          ? parentNode
          : document.documentElement
        ).namespaceURI,
    tagName
  ) as HTMLElement | SVGElement
}

// export function insertNode(node: Node, pNode: Node, bNode?: Node | null) {
//   pNode.insertBefore(node, bNode || null)
// }

export function validateTextData(v: any) {
  const t = typeof v
  return t === 'string' || t === 'number' || t === 'bigint' ? '' + v : ''
}

// export function
