import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  useCameraToRenderer,
  returnCameraContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function PerspectiveCamera({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.PerspectiveCamera>
  args?: ConstructorParameters<typeof THREE.PerspectiveCamera>
  sets?: IDeepPartial<THREE.PerspectiveCamera>
}) {
  const refInstance = R.useRef<THREE.PerspectiveCamera>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.PerspectiveCamera(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useCameraToRenderer(instance)
  useRefInstance(ref, instance)

  return returnCameraContext(instance, children)
}
