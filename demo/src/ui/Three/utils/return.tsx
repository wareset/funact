import { Object3DContext, CameraContext, LightContext } from './context'

export function returnContext<T>(
  Context: R.Context<T>,
  instance: T,
  children: any
) {
  return <Context value={instance}>{children}</Context>
}

export function returnCameraContext<T extends THREE.Camera>(
  instance: T,
  children: any
) {
  return returnContext(
    CameraContext,
    instance,
    returnContext(Object3DContext, instance, children)
  )
}

export function returnLightContext<T extends THREE.Light>(
  instance: T,
  children: any
) {
  return returnContext(
    LightContext,
    instance,
    returnContext(Object3DContext, instance, children)
  )
}
