import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function IESSpotLight({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.WebGPU.IESSpotLight>
  args?: ConstructorParameters<typeof THREE.WebGPU.IESSpotLight>
  sets?: IDeepPartial<THREE.WebGPU.IESSpotLight>
}) {
  const refInstance = R.useRef<THREE.WebGPU.IESSpotLight>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.WebGPU.IESSpotLight(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
