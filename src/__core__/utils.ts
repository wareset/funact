import { IHook } from './types'

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

// Проверка, что все хуки всегда вызываются в правильном порядке
export function checkHook(hook: IHook, hookType: (...a: any[]) => any) {
  if (hook.hookType !== hookType) {
    throw new Error('Incorrect hook: ' + hookType.name)
  }
}

export function isEqualDeps(
  a: readonly unknown[] | undefined | null,
  b: readonly unknown[] | undefined | null
) {
  if (a !== b) {
    if (a && b && a.length === b.length) {
      for (let is = Object.is, i = a.length; i-- > 0; ) {
        if (!is(a[i], b[i])) {
          return false
        }
      }
      return true
    }
    return false
  }
  return true
}
