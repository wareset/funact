export * from './is'
export * from './math'
export * from './event'
export * from './dictionary'

export function getObjectName(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
