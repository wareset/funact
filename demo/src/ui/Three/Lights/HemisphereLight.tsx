import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function HemisphereLight({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.HemisphereLight>
  args?: ConstructorParameters<typeof THREE.HemisphereLight>
  sets?: IDeepPartial<THREE.HemisphereLight>
}) {
  const refInstance = R.useRef<THREE.HemisphereLight>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.HemisphereLight(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
