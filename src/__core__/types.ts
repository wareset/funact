import { type VNode } from './VNode'

export type Props = { [key: string]: any }

export type Comparator = (prevProps: Props, nextProps: Props) => boolean

export type FC =
  // | ((props: Props) => any)
  // | (() => any)
  | {
      (props: Props): any
      compare?: Comparator
    }
  | {
      (): any
      compare?: Comparator
    }

export interface IHook {
  // Порядковый номер хука
  hookIdx: number
  // Тип хука (в роли него выступает сама функция хука)
  hookType: (...a: any[]) => any
  vNode: VNode
  value: any
  // Зависимости, если есть
  deps?: null | readonly unknown[]
  // Очистка, если есть
  cleanup?: null | (() => void)
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
