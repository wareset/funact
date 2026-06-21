declare class _ISignal<G> {
  // означает, что у сигнала есть функция подготовки перед выводом результата
  readonly prepared?: true | undefined

  // означает, что перед изменением будет вызываться какая-то функция валидации
  readonly captured?: true | undefined

  // означает, что сигнал сам создаёт значение на основе функции
  // readonly computed?: true | undefined

  // означает, что сигнал нельзя изменить без пароля
  // readonly defensed?: true | undefined

  // это значения для проверки в консоли, его изменение ни на что не повлияет
  private readonly '_value': G
  subscribe<C>(callback: (this: C, value: G) => void, thisArg?: C): () => void
  toString(
    ...a: G extends { toString(...a: any): any }
      ? Parameters<G['toString']>
      : any
  ): G extends { toString(...a: any): infer I } ? I : string
  valueOf(
    ...a: G extends { valueOf(...a: any): any } ? Parameters<G['valueOf']> : any
  ): G extends { valueOf(...a: any): infer I } ? I : G
  toJSON(
    ...a: G extends { toJSON(...a: any): any } ? Parameters<G['toJSON']> : any
  ): G extends { toJSON(...a: any): infer I } ? I : G
}

export declare class ISignalComputed<G> extends _ISignal<G> {
  readonly computed: true
  readonly defensed?: undefined
  get $(): G
  get(): G
}
export declare class ISignalDefensed<G, S = G> extends _ISignal<G> {
  readonly computed?: undefined
  readonly defensed: true
  get $(): G
  get(): G
  set(v: S, pass: any): this
}
export declare class ISignalStandard<G, S = G> extends _ISignal<G> {
  readonly computed?: undefined
  readonly defensed?: undefined
  get $(): G
  get(): G
  set $(v: G)
  set(v: S): this
}

export type ISignal<G, S = G> =
  | ISignalComputed<G>
  | ISignalDefensed<G, S>
  | ISignalStandard<G, S>
