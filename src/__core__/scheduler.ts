import { type VNode, updateVNode, getVNodeOnly, setVNodeOnly } from './VNode'
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

let INSERTION_EFFECTS: any[] = []
let LAYOUT_EFFECTS: any[] = []
let EFFECTS: any[] = []

let updating = false
function update() {
  const PREV_V_NODES = V_NODES
  V_NODES = []
  for (let i = 0; i < PREV_V_NODES.length; i++) updateVNode(PREV_V_NODES[i])

  const PREV_INSERTION_EFFECTS = INSERTION_EFFECTS
  INSERTION_EFFECTS = []
  update_any_effects(PREV_INSERTION_EFFECTS)

  const PREV_LAYOUT_EFFECTS = LAYOUT_EFFECTS
  LAYOUT_EFFECTS = []
  update_any_effects(PREV_LAYOUT_EFFECTS)

  document.body.clientWidth

  // if (EFFECTS.length) {
  //   schedule(updateEffects)
  // } else if (V_NODES.length || LAYOUT_EFFECTS.length) {
  //   update()
  // } else {
  //   updating = false
  // }
}

function updateEffects() {
  const PREV_EFFECTS = EFFECTS
  EFFECTS = []
  update_any_effects(PREV_EFFECTS)

  // if (V_NODES.length || LAYOUT_EFFECTS.length) {
  //   update()
  // } else if (EFFECTS.length) {
  //   schedule(updateEffects)
  // } else {
  //   updating = false
  // }

  if (
    V_NODES.length ||
    EFFECTS.length ||
    LAYOUT_EFFECTS.length ||
    INSERTION_EFFECTS.length
  ) {
    schedule(update), schedule(updateEffects)
  } else {
    updating = false
  }
}

function update_any_effects(effects: any[]) {
  const prevVNode = getVNodeOnly()

  for (let i = 0, a: any[]; i < effects.length; i++) {
    if ((a = effects[i]).length) {
      setVNodeOnly(a[0].vNode)
      for (let v: any, j = 0; j < a.length; j++) {
        v = a[j]
        v.return && (v.return(), (v.return = null))
      }
    }
  }

  for (let i = 0, a: any[]; i < effects.length; i++) {
    if ((a = effects[i]).length) {
      setVNodeOnly(a[0].vNode)
      for (let v: any, j = 0; j < a.length; j++) {
        v = a[j]
        v.vNode.alive && (v.return = v.effect())
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
    updating || ((updating = true), schedule(update), schedule(updateEffects))
  }
}

export function addInsertionEffectInQueue(data: any) {
  add_task_for_any_effect(data, INSERTION_EFFECTS)
}

export function addLayoutEffectInQueue(data: any) {
  add_task_for_any_effect(data, LAYOUT_EFFECTS)
}

export function addEffectInQueue(data: any) {
  add_task_for_any_effect(data, EFFECTS)
}

function add_task_for_any_effect(data: any, effects: any[]) {
  const vNode = data.vNode
  if (vNode.alive) {
    const deep = vNode.deep
    let i = effects.length

    for (let n: number; i-- > 0; ) {
      if ((n = sortDeeps(effects[i][0].vNode.deep, deep)) < 0) break
      else if (n === 0) effects[i].push(data), (data = null)
    }

    data && effects.splice(++i, 0, [data])
    updating || ((updating = true), schedule(update), schedule(updateEffects))
  }
}
