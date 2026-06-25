import { isEqual } from './is'

function isFunction(v: any): v is Function {
  return typeof v === 'function'
}

function isNativeObject(v: any): v is { [key: string]: any } {
  return (
    v != null && ((v = Object.getPrototypeOf(v)) === Object.prototype || !v)
  )
}

function isEqualFnArgs(this: any[], _v: any, k: number, cache: any[]) {
  return isEqual(this[k], cache[k])
}

export function deepUpdateProps(to: any, from: any, cache: any) {
  for (const k in from)
    if (isFunction(to[k]))
      (cache[k] &&
        cache[k].length === from[k].length &&
        cache[k].every(isEqualFnArgs, from)) ||
        to[k].apply(to, (cache[k] = from[k]))
    else
      isNativeObject(from[k])
        ? deepUpdateProps(to[k], from[k], cache[k] || (cache[k] = {}))
        : isEqual(cache[k], from[k]) ||
          isEqual(to[k], (cache[k] = from[k])) ||
          (to[k] = from[k])
}

export type IDeepPartial<T> = T extends object
  ? {
      -readonly [P in keyof T as P extends `_${string}`
        ? never
        : P]?: T[P] extends (...args: any) => any
        ? Parameters<T[P]>
        : IDeepPartial<T[P]>
    }
  : T

const CACHE_KEY = '_$setsCache$_'
export function setChanges<T extends Record<any, any>>(
  to: T,
  from: IDeepPartial<T> | null | undefined
) {
  if (from) {
    deepUpdateProps(to, from, to[CACHE_KEY] || ((to as any)[CACHE_KEY] = {}))
  }
}
