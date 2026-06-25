import {
  useRefInstance,
  returnContext,
  checkIsObject,
  RendererContext,
  isEqualObjects,
  useRenderAnimation,
  IDeepPartial,
  setChanges,
} from '../utils'
import { getCanvas } from '../Canvas'

export type WebGLRendererParameters = Omit<
  ConstructorParameters<typeof THREE.WebGLRenderer>[0] & {},
  'canvas'
>

export function WebGLRenderer({
  children,
  ref,
  opts = {},
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.WebGLRenderer>
  opts?: WebGLRendererParameters
  sets?: IDeepPartial<THREE.WebGLRenderer>
}) {
  const refInstance = R.useRef<THREE.WebGLRenderer>(null)
  let instance = refInstance.current
  if (!instance || !isEqualObjects(opts, (instance as any).userData.opts)) {
    const canvas = checkIsObject(getCanvas(), 'WebGLRenderer', 'Canvas')
    instance = refInstance.current = new THREE.WebGLRenderer({
      ...opts,
      canvas,
    })
    // @ts-ignore
    instance.userData = { opts }
  }

  setChanges(instance, sets)
  useRenderAnimation(instance)
  useRefInstance(ref, instance)

  return returnContext(RendererContext, instance, children)
}
