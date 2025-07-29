import { getVNodeForHook } from '../VNode'
import { checkHook } from '../utils'
// import { useRef } from './useRef'

function devUseDeep(): number[] {
  const vNode = getVNodeForHook()
  const idx = vNode.hookIdx
  const hooks = vNode.hooks
  const data =
    hooks[idx] ||
    (hooks[idx] = { idx, hook: devUseDeep, value: vNode.deep.slice() })
  checkHook(data, devUseDeep, idx)
  return data.value

  // const ref = useRef<number[]>(null)
  // return ref.current || (ref.current = getHookIndexAndVNode()[1].deep.slice())
}
export { devUseDeep }
