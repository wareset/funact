import { IHook, checkHook } from '../hooks.utils'
import { getCurrentVNode } from '../VNode.utils'

import { useEffect } from './useEffect'
import { addVNodeInQueue } from '../scheduler'
import { is } from '../utils'

interface IHookDataForUseSyncExternalStore extends IHook {
  getSnapshot: () => any
  check: () => void
  effect: () => void
  effectDeps: [(onStoreChange: () => void) => () => void]
}

function useSyncExternalStore<Snapshot>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => Snapshot,
  _getServerSnapshot?: () => Snapshot
): Snapshot {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook as IHookDataForUseSyncExternalStore
  if (hook) {
    checkHook(hook, useSyncExternalStore)
    subscribe === hook.effectDeps[0] || (hook.effectDeps = [subscribe])
    hook.getSnapshot = getSnapshot
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: useSyncExternalStore,
      vNode,
      value: getSnapshot(),

      getSnapshot,
      check() {
        if (!is(hook.value, (hook.value = hook.getSnapshot()))) {
          addVNodeInQueue(hook.vNode)
        }
      },
      effect() {
        return hook.effectDeps[0](hook.check)
      },
      effectDeps: [subscribe],
    } satisfies IHookDataForUseSyncExternalStore
  }
  vNode.prevHook = hook

  useEffect(hook.effect, hook.effectDeps)
  useEffect(hook.check)

  return hook.value
}
export { useSyncExternalStore }
