import { IContext } from './types'
import { addVNodeInQueue } from './scheduler'
import { getCurrentVNode } from './VNode.utils'

// TODO: Нужно добавить Consumer

/*@__NO_SIDE_EFFECTS__*/
export function createContext<T>(defaultValue: T): IContext<T> {
  const ContextProvider = function (props: { value: T; children?: any }) {
    const vNode = getCurrentVNode()
    const value = props.value
    const users = vNode.contextUsers || (vNode.contextUsers = [])

    if (!Object.is(vNode.contextValue, value)) {
      vNode.contextValue = value
      for (let i = 0, l = users.length; i < l; ++i) {
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
