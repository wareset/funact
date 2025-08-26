import { type Context } from './types'

import { getVNodeOnly } from './VNode'

/*@__NO_SIDE_EFFECTS__*/
export function createContext<T>(defaultValue: T): Context<T> {
  const ContextProvider = function (props: { value: T; children?: any }) {
    const vNode = getVNodeOnly()!
    const value = props.value
    const users = vNode.contextUsers || (vNode.contextUsers = [])

    if (!Object.is(vNode.contextValue, value)) {
      vNode.contextValue = value
      for (let i = 0, l = users.length; i < l; ++i) users[i](value)
    }

    return props.children
  }
  ContextProvider.Provider = ContextProvider
  ContextProvider.defaultValue = defaultValue
  return ContextProvider
}
