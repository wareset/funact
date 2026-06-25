// export type Object

export const Object3DContext = R.createContext<THREE.Object3D | null>(null)

export const CameraContext = R.createContext<
  THREE.OrthographicCamera | THREE.PerspectiveCamera | THREE.Camera | null
>(null)

export const LightContext = R.createContext<
  | THREE.AmbientLight
  | THREE.DirectionalLight
  | THREE.HemisphereLight
  | THREE.WebGPU.IESSpotLight
  | THREE.LightProbe
  | THREE.PointLight
  | THREE.WebGPU.ProjectorLight
  | THREE.RectAreaLight
  | THREE.SpotLight
  | THREE.Light
  | null
>(null)

export const RendererContext = R.createContext<
  THREE.WebGLRenderer | THREE.WebGPU.WebGPURenderer | null
>(null)
