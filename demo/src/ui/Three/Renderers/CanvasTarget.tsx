import {
  useRefInstance,
  returnContext,
  checkIsObject,
  IDeepPartial,
  setChanges,
} from '../utils'
import { getCanvas } from '../Canvas'

const Context = R.createContext<THREE.WebGPU.CanvasTarget | null>(null)

export function getCanvasTarget() {
  return R.use(Context)
}
export function useCanvasTarget() {
  return R.useContext(Context)
}

export function CanvasTarget({
  children,
  ref,
  // canvas,
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.WebGPU.CanvasTarget>
  // canvas?: HTMLCanvasElement
  sets?: IDeepPartial<THREE.WebGPU.CanvasTarget>
}) {
  const refInstance = R.useRef<THREE.WebGPU.CanvasTarget>(null)
  let instance = refInstance.current
  if (!instance) {
    const canvas = checkIsObject(getCanvas(), 'CanvasTarget', 'Canvas')
    instance = refInstance.current = new THREE.WebGPU.CanvasTarget(canvas)
    // instance.setPixelRatio(window.devicePixelRatio)
    // instance.setSize( 200, 200 );
  }

  setChanges(instance, sets)
  useRefInstance(ref, instance)

  return returnContext(Context, instance, children)
}
