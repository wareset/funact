export const isEqual: (typeof Object)['is'] =
  Object.is ||
  function (a, b) {
    return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b
  }

export function isEqualArrays(
  a: readonly unknown[] | undefined | null,
  b: readonly unknown[] | undefined | null
) {
  if (a !== b) {
    if (a && b && a.length === b.length) {
      for (let i = a.length; i-- > 0; ) {
        if (!isEqual(a[i], b[i])) {
          return false
        }
      }
      return true
    }
    return false
  }
  return true
}

export function isEqualObjects(
  prevProps: Record<any, any> | undefined | null,
  nextProps: Record<any, any> | undefined | null
) {
  if (prevProps !== nextProps) {
    if (prevProps && nextProps) {
      const keys = Object.keys(prevProps)
      let i = keys.length
      if (i !== Object.keys(nextProps).length) return false

      for (; i-- > 0; ) {
        const k = keys[i]
        if (!(k in nextProps && isEqual(prevProps[k], nextProps[k]))) {
          return false
        }
      }
    }
    return false
  }
  return true
}
