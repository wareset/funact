import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function SpotLight({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.SpotLight>
  args?: ConstructorParameters<typeof THREE.SpotLight>
  sets?: IDeepPartial<THREE.SpotLight>
}) {
  const refInstance = R.useRef<THREE.SpotLight>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.SpotLight(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
