import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

export function LightProbe({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.LightProbe>
  args?: ConstructorParameters<typeof THREE.LightProbe>
  sets?: IDeepPartial<THREE.LightProbe>
}) {
  const refInstance = R.useRef<THREE.LightProbe>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.LightProbe(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
