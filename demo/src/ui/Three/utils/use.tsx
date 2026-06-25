import { useGetParentObject3D, useGetRenderer } from './shared'
import { useCanvasTarget } from '../Renderers/CanvasTarget'
import { useGetScene } from '../Scenes/Scene'

import { checkIsObject } from './check'

export function useRefInstance<T extends Record<any, any>>(
  ref: R.Ref<T> | undefined,
  instance: T
) {
  R.useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        const cleanup = ref(instance)
        return () => {
          cleanup ? cleanup() : ref(null)
        }
      } else {
        ref.current = instance
        return () => {
          ref.current = null
        }
      }
    }
  }, [ref, instance])
  R.useEffect(
    () => () => 'dispose' in instance && instance.dispose(),
    [instance]
  )
}

export function useAttachToParent<T extends THREE.Object3D>(instance: T) {
  const parent = checkIsObject(useGetParentObject3D(), instance.type, 'Scene')
  R.useLayoutEffect(() => {
    parent.attach(instance)
    return () => {
      instance.removeFromParent()
    }
  }, [parent, instance])
}

export function useCameraToRenderer<T extends THREE.Camera>(camera: T) {
  const scene = checkIsObject(useGetScene(), 'Camera', 'Scene')
  const renderer = checkIsObject(useGetRenderer(), 'Camera', 'Renderer')
  let canvasTarget = useCanvasTarget()
  R.useLayoutEffect(() => {
    switch (true) {
      case 'isWebGPURenderer' in renderer: {
        // canvasTarget = checkIsObject(canvasTarget, 'Camera', 'CanvasTarget')
        //@ts-ignore
        canvasTarget || (canvasTarget = renderer._canvasTarget)
        const userData = camera.userData
        userData.active = true
        userData.scene = scene
        userData.canvasTarget = canvasTarget

        const cameras: any[] = (renderer as any).userData.cameras
        cameras.push(camera)
        return () => {
          userData.active = false
          const id = cameras.indexOf(camera)
          id > -1 && cameras.splice(id, 1)
        }
      }
      case 'isWebGLRenderer' in renderer:
      // break
      default:
        throw `Not support renderer!`
    }
  }, [canvasTarget, renderer, scene, camera])
}

export function useRenderAnimation(
  renderer: THREE.WebGLRenderer | THREE.WebGPU.WebGPURenderer
) {
  R.useLayoutEffect(() => {
    // @ts-ignore
    const userData = renderer.userData || (renderer.userData = {})
    switch (true) {
      case 'isWebGPURenderer' in renderer: {
        const cameras: (THREE.Camera & {
          userData: {
            scene: THREE.Scene
            canvasTarget: THREE.WebGPU.CanvasTarget
          }
        })[] = userData.cameras
        renderer.setAnimationLoop(() => {
          for (let i = cameras.length; i-- > 0; ) {
            const camera = cameras[i]
            if (camera.parent) {
              const { active, scene, canvasTarget } = camera.userData
              if (active) {
                renderer!.setCanvasTarget(canvasTarget)
                renderer!.render(scene, camera)
              }
            } else {
              cameras.splice(i, 1)
            }
          }
        })
        return () => {
          renderer.setAnimationLoop(null)
        }
      }
      case 'isWebGLRenderer' in renderer:
      // break
      default:
        throw `Not support renderer!`
    }
  }, [renderer])
}
