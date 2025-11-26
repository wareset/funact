import { IHook } from './types'
import { type VNode } from './VNode'

import { sortDeeps } from './utils'
import { getCurrentVNode, setCurrentVNode, updateVNode } from './VNode.utils'

// Взято из react 18
export const schedule =
  typeof queueMicrotask === 'function'
    ? queueMicrotask
    : typeof Promise !== 'undefined'
      ? function (callback: () => void) {
          return Promise.resolve(null).then(callback)
        }
      : setTimeout

let V_NODES: VNode[] = []
let INSERTION_EFFECTS: IHook[][] = []
let LAYOUT_EFFECTS: IHook[][] = []
let EFFECTS: IHook[][] = []

/*
Вероятно исполнение effect должно происходить в следующем микротаске,
но пока реализовано так, чтобы посмотреть как будет.
*/
let updating = false
function update() {
  const PREV_V_NODES = V_NODES
  const PREV_INSERTION_EFFECTS = INSERTION_EFFECTS
  const PREV_LAYOUT_EFFECTS = LAYOUT_EFFECTS
  const PREV_EFFECTS = EFFECTS

  updating = false

  V_NODES = []
  INSERTION_EFFECTS = []
  LAYOUT_EFFECTS = []
  EFFECTS = []

  for (let i = 0; i < PREV_V_NODES.length; ++i) updateVNode(PREV_V_NODES[i])

  update_any_effects(PREV_INSERTION_EFFECTS)
  update_any_effects(PREV_LAYOUT_EFFECTS)
  document.body.clientWidth
  update_any_effects(PREV_EFFECTS)
}

function update_any_effects(effects: IHook[][]) {
  // это нужно для startTransition
  const prevVNode = getCurrentVNode()

  for (let i = 0, a: IHook[]; i < effects.length; ++i) {
    if ((a = effects[i]).length) {
      setCurrentVNode(a[0].vNode)
      for (let v: IHook, j = 0; j < a.length; ++j) {
        v = a[j]
        v.cleanup && (v.cleanup(), (v.cleanup = null))
      }
    }
  }

  for (let i = 0, a: IHook[]; i < effects.length; ++i) {
    if ((a = effects[i]).length) {
      setCurrentVNode(a[0].vNode)
      for (let v: IHook, j = 0; j < a.length; ++j) {
        v = a[j]
        v.vNode!.alive && (v.cleanup = v.value())
      }
    }
  }

  setCurrentVNode(prevVNode)
}

export function addVNodeInQueue(vNode: VNode) {
  if (!vNode.dirty && vNode.alive) {
    vNode.dirty = true
    const deep = vNode.deep
    let i = V_NODES.length

    for (; i-- > 0; ) if (sortDeeps(V_NODES[i].deep, deep) < 0) break

    V_NODES.splice(i + 1, 0, vNode)
    updating || ((updating = true), schedule(update))
  }
}

export function addInsertionEffectInQueue(hook: IHook) {
  add_task_for_any_effect(hook, INSERTION_EFFECTS)
}
export function addLayoutEffectInQueue(hook: IHook) {
  add_task_for_any_effect(hook, LAYOUT_EFFECTS)
}
export function addEffectInQueue(hook: IHook) {
  add_task_for_any_effect(hook, EFFECTS)
}
function add_task_for_any_effect(hook: IHook, effects: IHook[][]) {
  const vNode = hook.vNode
  if (vNode.alive) {
    const deep = vNode.deep
    let i = effects.length

    for (let n: number; i-- > 0; ) {
      if ((n = sortDeeps(effects[i][0].vNode.deep, deep)) < 0) break
      else if (n === 0) return void effects[i].push(hook)
    }

    effects.splice(i + 1, 0, [hook])
    updating || ((updating = true), schedule(update))
  }
}
