export interface RefObject<T> {
  current: T
}

export interface Context<T> {
  (props: { value: T; children?: any }): any
  Provider: (props: { value: T; children?: any }) => any
  // Consumer: (props: {children: ((value: T) => any) }) => any
  defaultValue: T
}

export type TransitionFunction = () =>
  | void
  | undefined
  | Promise<void | undefined>
