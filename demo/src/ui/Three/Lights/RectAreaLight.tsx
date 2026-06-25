import {
  useRefInstance,
  useAttachToParent,
  isEqualArrays,
  returnLightContext,
  IDeepPartial,
  setChanges,
} from '../utils'

import { RectAreaLightTexturesLib } from 'three/addons/lights/RectAreaLightTexturesLib.js'
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'

let isNeedInitRectAreaLight = true
function argsRectAreaLight() {
  isNeedInitRectAreaLight = false
  RectAreaLightUniformsLib.init() // only relevant for WebGLRenderer
  THREE.WebGPU.RectAreaLightNode.setLTC(RectAreaLightTexturesLib.init()) //  only relevant for WebGPURenderer
}

export function RectAreaLight({
  children,
  ref,
  args = [],
  sets,
}: {
  children?: any
  ref?: R.Ref<THREE.RectAreaLight>
  args?: ConstructorParameters<typeof THREE.RectAreaLight>
  sets?: IDeepPartial<THREE.RectAreaLight>
}) {
  isNeedInitRectAreaLight && argsRectAreaLight()

  const refInstance = R.useRef<THREE.RectAreaLight>(null)
  let instance = refInstance.current
  if (!instance || !isEqualArrays(args, instance.userData.args)) {
    instance = refInstance.current = new THREE.RectAreaLight(...args)
    instance.userData.args = args
  }

  setChanges(instance, sets)
  useAttachToParent(instance)
  useRefInstance(ref, instance)

  return returnLightContext(instance, children)
}
