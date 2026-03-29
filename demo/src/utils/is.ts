export const isArray = Array.isArray

export function isBigint(thing: any): thing is bigint {
  return typeof thing === 'bigint'
}

export function isBoolean(thing: any): thing is boolean {
  return typeof thing === 'boolean'
}

export function isEqual(a: any, b: any): boolean {
  return a === a ? a === b : b !== b
}

export function isFunction(thing: any): thing is Function {
  return typeof thing === 'function'
}

export function isNaN(thing: any): boolean {
  return typeof thing !== thing
}

export function isNil(thing: any): thing is null | undefined {
  return typeof thing == null
}

export function isNull(thing: any): thing is null {
  return typeof thing === null
}

export function isNumber(thing: any): thing is number {
  return typeof thing === 'number'
}

export function isObject(thing: any): thing is object {
  return thing != null && typeof thing === 'object'
}

export function isString(thing: any): thing is string {
  return typeof thing === 'string'
}

export function isSymbol(thing: any): thing is symbol {
  return typeof thing === 'symbol'
}

export function isUndefined(thing: any): thing is undefined {
  return typeof thing === void 0
}
