import { Context } from './types'
import { addVNodeInQueue } from './scheduler'
import { getCurrentVNode } from './VNode.utils'
import { isEqual } from './utils'

// TODO: Нужно добавить Consumer

/*@__NO_SIDE_EFFECTS__*/
export function createContext<T>(defaultValue: T): Context<T> {
  function ContextProvider(props: { value: T; children?: any }) {
    const vNode = getCurrentVNode()
    const context = vNode.context
    const value = props.value

    if (!context) {
      vNode.context = { value, users: [] }
    } else if (!isEqual(context.value, value)) {
      context.value = value
      for (let users = context.users, i = 0, l = users.length; i < l; ++i) {
        users[i].value = value
        addVNodeInQueue(users[i].vNode)
      }
    }

    return props.children
  }
  ContextProvider.Provider = ContextProvider
  ContextProvider.defaultValue = defaultValue
  return ContextProvider
}
