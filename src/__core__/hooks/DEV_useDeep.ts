import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'
// import { useRef } from './useRef'

function devUseDeep(): number[] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let hook = prevHook.nextHook
  if (hook) {
    checkHook(hook, devUseDeep)
  } else {
    hook = prevHook.nextHook = {
      nextHook: null,
      hookType: devUseDeep,
      vNode,
      value: vNode.deep.slice(),
    }
  }
  vNode.prevHook = hook

  return hook.value

  // const ref = useRef<number[]>(null)
  // return ref.current || (ref.current = getHookIndexAndVNode()[1].deep.slice())
}
export { devUseDeep }
