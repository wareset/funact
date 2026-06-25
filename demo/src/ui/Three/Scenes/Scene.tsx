import {
  useRefInstance,
  returnContext,
  Object3DContext,
  getParentObject3D,
  IDeepPartial,
  setChanges,
} from '../utils'

const Context = R.createContext<THREE.Scene | null>(null)

export function getScene() {
  return R.use(Context)
}
export function useGetScene() {
  return R.useContext(Context)
}

export function Scene({
  children,
  ref,
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.Scene>
  sets?: IDeepPartial<THREE.Scene>
}) {
  const refInstance = R.useRef<THREE.Scene>(null)
  let instance = refInstance.current
  if (!instance) {
    const parent = getParentObject3D()
    if (parent) throw `The "Scene" should not be inside the "${parent.type}"!`

    instance = refInstance.current = new THREE.Scene()
  }

  setChanges(instance, sets)
  useRefInstance(ref, instance)

  return returnContext(
    Context,
    instance,
    returnContext(Object3DContext, instance, children)
  )
}
