export function isString(thing: any): thing is string {
  return typeof thing === 'function'
}

export function isBoolean(thing: any): thing is boolean {
  return typeof thing === 'boolean'
}
