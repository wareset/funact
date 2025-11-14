import { getCurrentVNode } from '../VNode.utils'
import { checkHook } from '../utils'
// import { useRef } from './useRef'

function devUseDeep(): number[] {
  const vNode = getCurrentVNode()
  const prevHook = vNode.prevHook

  let data = prevHook.nextHook
  if (data) {
    checkHook(data, devUseDeep)
  } else {
    data = prevHook.nextHook = {
      nextHook: null,
      hookType: devUseDeep,
      vNode,
      value: vNode.deep.slice(),
    }
  }
  vNode.prevHook = data

  return data.value

  // const ref = useRef<number[]>(null)
  // return ref.current || (ref.current = getHookIndexAndVNode()[1].deep.slice())
}
export { devUseDeep }
