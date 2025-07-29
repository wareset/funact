export function sortDeeps(a: number[], b: number[]): -1 | 0 | 1 {
  const al = a.length
  const bl = b.length
  let res = bl - al
  for (let i = 0, v: number; i < al && i < bl; i++)
    if ((v = a[i] - b[i])) {
      res = v
      break
    }
  return res > 0 ? 1 : res < 0 ? -1 : 0
}

export function checkHook<F extends Function>(data: any, hook: F, idx: number) {
  if (data.hook !== hook || data.idx !== idx)
    throw new Error('Incorrect hook ' + hook.name)
}
