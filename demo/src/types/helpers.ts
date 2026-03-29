export type OnlyOne<T> = {
  [K in keyof T]: Expand<
    Pick<T, K> & Partial<Record<Exclude<keyof T, K>, never>>
  >
}[keyof T]

// Вспомогательный тип для красивого отображения подсказок
export type Expand<T> = { [K in keyof T]: T[K] }
