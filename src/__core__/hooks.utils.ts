import { type VNode } from './VNode'
import { is } from './utils'

// Возможно хуки станут классами?
export interface IHook {
  // Следующий хук
  nextHook: (IHook & { [key: string]: any }) | null
  // Тип хука (в роли него выступает сама функция хука)
  hookType: (...a: any[]) => any

  vNode: VNode

  value: any
  // Зависимости, если есть
  deps?: null | readonly unknown[]
  // Очистка, если есть
  cleanup?: null | (() => void)

  // [key: string]: any
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
      for (let i = a.length; i-- > 0; ) {
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
