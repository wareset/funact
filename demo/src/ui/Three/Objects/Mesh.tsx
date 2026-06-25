import {
  useRefInstance,
  useAttachToParent,
  returnContext,
  isEqualArrays,
  Object3DContext,
  IDeepPartial,
  setChanges,
} from '../utils'

const Context = R.createContext<THREE.AmbientLight | null>(null)

export function useMesh() {
  return R.useContext(Context)
}

export function Mesh({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.Mesh>
  args?: ConstructorParameters<typeof THREE.Mesh>
  sets?: IDeepPartial<THREE.Mesh>
}) {
  const refInstance = R.useRef<THREE.Mesh>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.Mesh(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnContext(Object3DContext, instance, children)
}
