import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function ProjectorLight({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.WebGPU.ProjectorLight>
  args?: ConstructorParameters<typeof THREE.WebGPU.ProjectorLight>
  sets?: IDeepPartial<THREE.WebGPU.ProjectorLight>
}) {
  const refInstance = R.useRef<THREE.WebGPU.ProjectorLight>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.WebGPU.ProjectorLight(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
