export function sortDeeps(a: number[], b: number[]): -1 | 0 | 1 {
  const al = a.length
  const bl = b.length
  let res = bl - al
  for (let i = 0, v: number; i < al && i < bl; ++i) {
    if ((v = a[i] - b[i])) {
      res = v
      break
    }
  }
  return res > 0 ? 1 : res < 0 ? -1 : 0
}
