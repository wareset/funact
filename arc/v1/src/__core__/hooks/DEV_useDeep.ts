import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
// import { useRef } from './useRef'

function devUseDeep(): number[] {
  const vNode = getVNodeForHook()
  const hookIdx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[hookIdx] ||
    (hooks[hookIdx] = {
      hookIdx: hookIdx,
      hookType: devUseDeep,
      vNode,
      value: vNode.deep.slice(),
    })
  checkHook(data, devUseDeep, hookIdx, vNode)
  return data.value

  // const ref = useRef<number[]>(null)
  // return ref.current || (ref.current = getHookIndexAndVNode()[1].deep.slice())
}
export { devUseDeep }
