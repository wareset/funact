import { IHook } from './types'
import { type VNode } from './VNode'

import { sortDeeps } from './utils'
import { updateVNode } from './VNode.utils'

// Взято из react 18
export const schedule =
  typeof queueMicrotask === 'function'
    ? queueMicrotask
    : typeof Promise !== 'undefined'
      ? function (callback: () => void) {
          Promise.resolve(null).then(callback)
        }
      : setTimeout

// Для экспериментов
// export const schedule2 = function (callback: () => void) {
//   setTimeout(callback, 1000)
// }

const V_NODES: VNode[] = []

const EFFECTS: IHook[][] = []
const LAYOUT_EFFECTS: IHook[][] = []
const INSERTION_AND_LAYOUT_EFFECTS: {
  deep: number[]
  // INSERTION
  i: IHook[]
  // LAYOUT
  l: IHook[]
}[] = []

let updating = 0
function update() {
  for (let vNode: VNode; (vNode = V_NODES.pop()!); ) {
    if (vNode.dirty) {
      if (updating > 4e4) throw 'loop'
      INSERTION_AND_LAYOUT_EFFECTS.length =
        LAYOUT_EFFECTS.length =
        EFFECTS.length =
          0

      updateVNode(vNode)

      INSERTION_AND_LAYOUT_EFFECTS.forEach(insertions_and_layouts)
      LAYOUT_EFFECTS.forEach(execute_effects)
      EFFECTS.forEach(cleanup_effects)
      EFFECTS.forEach(execute_effects)
    }
  }
  updating = 0
}

function insertions_and_layouts(
  // this: typeof EFFECTS,
  item: (typeof INSERTION_AND_LAYOUT_EFFECTS)[number],
  a: any
) {
  // INSERTION
  if ((a = item.i).length) {
    cleanup_effects(a), execute_effects(a)
  }
  // LAYOUT
  if ((a = item.l).length) {
    cleanup_effects(a), a[0].vNode.alive && LAYOUT_EFFECTS.push(a)
  }
}
function cleanup_effects(a: IHook[]) {
  for (let v, cleanup, j = 0; j < a.length; ++j) {
    ;(cleanup = (v = a[j]).cleanup) && ((v.cleanup = null), cleanup())
  }
}
function execute_effects(a: IHook[], vNode?: any) {
  vNode = a[0].vNode
  for (let v, j = 0; j < a.length && vNode.alive; ++j) {
    ;(v = a[j]), (v.cleanup = v.value())
  }
}

export function addVNodeInQueue(vNode: VNode) {
  if (!vNode.dirty) {
    vNode.dirty = true
    const deep = vNode.deep
    let i = V_NODES.length

    for (; i-- > 0; ) if (sortDeeps(V_NODES[i].deep, deep, true) > 0) break

    V_NODES.splice(i + 1, 0, vNode)
    updating++ || schedule(update)
  }
}

export function addInsertionOrLayoutEffectInQueue(
  hook: IHook,
  isInsertion: 1 | 0
) {
  const vNode = hook.vNode
  const deep = vNode.deep
  let i = INSERTION_AND_LAYOUT_EFFECTS.length

  for (let n: number; i-- > 0; ) {
    if ((n = sortDeeps(INSERTION_AND_LAYOUT_EFFECTS[i].deep, deep)) < 0) break
    else if (n === 0)
      return void INSERTION_AND_LAYOUT_EFFECTS[i][isInsertion ? 'i' : 'l'].push(
        hook
      )
  }

  INSERTION_AND_LAYOUT_EFFECTS.splice(
    i + 1,
    0,
    isInsertion ? { deep, i: [hook], l: [] } : { deep, i: [], l: [hook] }
  )
  // updating++ || schedule(update)
}
export function addEffectInQueue(hook: IHook) {
  const vNode = hook.vNode
  const deep = vNode.deep
  let i = EFFECTS.length

  for (let n: number; i-- > 0; ) {
    if ((n = sortDeeps(EFFECTS[i][0].vNode.deep, deep)) < 0) break
    else if (n === 0) return void EFFECTS[i].push(hook)
  }

  EFFECTS.splice(i + 1, 0, [hook])
  // updating++ || schedule(update)
}
