import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  useCameraToRenderer,
  returnCameraContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function OrthographicCamera({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.OrthographicCamera>
  args?: ConstructorParameters<typeof THREE.OrthographicCamera>
  sets?: IDeepPartial<THREE.OrthographicCamera>
}) {
  const refInstance = R.useRef<THREE.OrthographicCamera>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.OrthographicCamera(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useCameraToRenderer(instance)
  useRefInstance(ref, instance)

  return returnCameraContext(instance, children)
}
