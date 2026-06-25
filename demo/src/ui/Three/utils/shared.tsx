import {
  Object3DContext,
  CameraContext,
  LightContext,
  RendererContext,
} from './context'

export function getParentObject3D() {
  return R.use(Object3DContext)
}
export function useGetParentObject3D() {
  return R.useContext(Object3DContext)
}

export function getCamera() {
  return R.use(CameraContext)
}
export function useGetCamera() {
  return R.useContext(CameraContext)
}

export function getLight() {
  return R.use(LightContext)
}
export function useGetLight() {
  return R.useContext(LightContext)
}

export function getRenderer() {
  return R.use(RendererContext)
}
export function useGetRenderer() {
  return R.useContext(RendererContext)
}
