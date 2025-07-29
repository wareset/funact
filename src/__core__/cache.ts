/*@__NO_SIDE_EFFECTS__*/
export function cache<CachedFunction extends Function>(
  fn: CachedFunction
): CachedFunction {
  const key = {}
  const map = new Map<any, any>()
  return function (...args: any[]) {
    let c: any = map
    for (let a = args, i = 0; i < a.length; i++) {
      c.has(a[i]) || c.set(a[i], new Map())
      c = c.get(a[i])
    }

    c.has(key) || c.set(key, fn.apply(null, args))
    return c.get(key)
  } as any
}
