import {
  useRefInstance,
  returnContext,
  RendererContext,
  isEqualObjects,
  useRenderAnimation,
  IDeepPartial,
  setChanges,
} from '../utils'
import { getCanvas } from '../Canvas'

export type WebGPURendererParameters = Omit<
  ConstructorParameters<typeof THREE.WebGPU.WebGPURenderer>[0] & {},
  'canvas'
>

export function WebGPURenderer({
  children,
  ref,
  opts = {},
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.WebGPU.WebGPURenderer>
  opts?: WebGPURendererParameters
  sets?: IDeepPartial<THREE.WebGPU.WebGPURenderer>
}) {
  const refInstance = R.useRef<THREE.WebGPU.WebGPURenderer>(null)
  let instance = refInstance.current
  if (!instance || !isEqualObjects(opts, (instance as any).userData.opts)) {
    const canvas = getCanvas() || void 0
    instance = refInstance.current = new THREE.WebGPU.WebGPURenderer({
      ...opts,
      canvas,
    })
    // @ts-ignore
    instance.userData = { opts, cameras: [] }
  }

  setChanges(instance, sets)
  useRenderAnimation(instance)
  useRefInstance(ref, instance)

  return returnContext(RendererContext, instance, children)
}

// function WebGPURendererInit({
//   instance,
//   children,
// }: {
//   instance: THREE.WebGPU.WebGPURenderer
//   children: any
// }) {
//   const { 0: isInit, 1: setInit } = R.useState(false)
//   if (!isInit) {
//     instance.args().then(() => setInit(true))
//   } else {
//     return returnContext(RendererContext, instance, children)
//   }
// }
