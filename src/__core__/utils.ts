export function sortDeeps(a: number[], b: number[], strict?: true): -1 | 0 | 1 {
  const al = a.length
  const bl = b.length
  let res = strict ? al - bl : bl - al
  for (let i = 0, v: number; i < al && i < bl; ++i) {
    if ((v = a[i] - b[i])) {
      res = v
      break
    }
  }
  return res > 0 ? 1 : res < 0 ? -1 : 0
}

export let is: (typeof Object)['is'] = function (a: any, b: any) {
  return (is =
    Object.is ||
    function (a, b) {
      return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b
    })(a, b)
}
