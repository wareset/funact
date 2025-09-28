import {
  type VNode,
  type HookData,
  updateVNode,
  getVNodeOnly,
  setVNodeOnly,
} from './VNode'
import { sortDeeps } from './utils'

export const schedule =
  typeof queueMicrotask === 'function'
    ? queueMicrotask
    : typeof Promise !== 'undefined'
      ? function (callback: () => void) {
          return Promise.resolve(null).then(callback)
        }
      : setTimeout

let V_NODES: VNode[] = []
let INSERTION_EFFECTS: HookData[][] = []
let LAYOUT_EFFECTS: HookData[][] = []
let EFFECTS: HookData[][] = []

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

function update_any_effects(effects: HookData[][]) {
  const prevVNode = getVNodeOnly()

  for (let i = 0, a: HookData[]; i < effects.length; ++i) {
    if ((a = effects[i]).length) {
      setVNodeOnly(a[0].vNode)
      for (let v: HookData, j = 0; j < a.length; ++j) {
        v = a[j]
        v.cleanup && (v.cleanup(), (v.cleanup = null))
      }
    }
  }

  for (let i = 0, a: HookData[]; i < effects.length; ++i) {
    if ((a = effects[i]).length) {
      setVNodeOnly(a[0].vNode)
      for (let v: HookData, j = 0; j < a.length; ++j) {
        v = a[j]
        v.vNode!.alive && (v.cleanup = v.value())
      }
    }
  }

  setVNodeOnly(prevVNode)
}

export function addVNodeInQueue(vNode: VNode) {
  if (!vNode.dirty && vNode.alive) {
    vNode.dirty = true
    const deep = vNode.deep
    let i = V_NODES.length

    for (; i-- > 0; ) if (sortDeeps(V_NODES[i].deep, deep) < 0) break

    V_NODES.splice(++i, 0, vNode)
    updating || ((updating = true), schedule(update))
  }
}

export function addInsertionEffectInQueue(hookData: HookData) {
  add_task_for_any_effect(hookData, INSERTION_EFFECTS)
}
export function addLayoutEffectInQueue(hookData: HookData) {
  add_task_for_any_effect(hookData, LAYOUT_EFFECTS)
}
export function addEffectInQueue(hookData: HookData) {
  add_task_for_any_effect(hookData, EFFECTS)
}
function add_task_for_any_effect(hookData: HookData, effects: HookData[][]) {
  const vNode = hookData.vNode
  if (vNode.alive) {
    const deep = vNode.deep
    let i = effects.length

    for (let n: number; i-- > 0; ) {
      if ((n = sortDeeps(effects[i][0].vNode.deep, deep)) < 0) break
      else if (n === 0) return void effects[i].push(hookData)
    }

    effects.splice(++i, 0, [hookData])
    updating || ((updating = true), schedule(update))
  }
}
