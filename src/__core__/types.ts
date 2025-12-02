import { type VNode } from './VNode'

export type Props = { [key: string]: any }

export type Comparator = (prevProps: Props, nextProps: Props) => boolean

export type FC<P extends Props = any> =
  // | ((props: Props) => any)
  // | (() => any)
  | {
      (props: P): any
      compare?: Comparator
    }
  | {
      (): any
      compare?: Comparator
    }

// Возможно хуки станут классами?
export interface IHook {
  // Следующий хук
  nextHook: (IHook & { [key: string]: any }) | null
  // Тип хука (в роли него выступает сама функция хука)
  hookType: (...a: any[]) => any
  // hookIdx: number

  vNode: VNode

  value: any
  // Зависимости, если есть
  deps?: null | readonly unknown[]
  // Очистка, если есть
  cleanup?: null | (() => void)

  // [key: string]: any
}

export type RefObject<T> = {
  current: T
}

export interface IContext<T> {
  (props: { value: T; children?: any }): any
  Provider: (props: { value: T; children?: any }) => any
  // Consumer: (props: {children: ((value: T) => any) }) => any
  defaultValue: T
}

export type TransitionFunction = () =>
  | void
  | undefined
  | Promise<void | undefined>
