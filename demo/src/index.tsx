// console.log('funact')

// export const test = () => import('@/ui/Header')
// export const test2 = () => import('@/ui/bs/Container')
// ;(async () => {
//   console.log(await test())
//   console.log(await test2())
// })()

import '@/style.css'
import { App } from '@/App'

addEventListener('keydown', (e) => {
  console.log('window keydown:', e.key)
})

// addEventListener('focus', (e) => {
//   console.log('window focus:', e)
// })

// addEventListener('blur', (e) => {
//   console.log('window blur:', e)
// })

console.log(R.render(<App />, document.body))

// import * as THREE from 'three';
// console.log(THREE)

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// console.log(OrbitControls)

function TestThree() {
  // const refWebGPURenderer = R.useRe

  // return <canvas className={}></canvas>
  return (
    <Three.Canvas style={{ backgroundColor: '#ad3' }}>
      <Three.WebGPURenderer
        ref={(renderer) => {
          if (renderer) {
            console.log(renderer)
            renderer.setClearColor(0xffffff, 1)
            renderer.setPixelRatio(window.devicePixelRatio)
          }
        }}
      >
        <Three.Scene>
          <Three.CanvasTarget
            ref={(canvasTarget) => {
              if (canvasTarget) {
                console.log(canvasTarget)
                canvasTarget.setPixelRatio(window.devicePixelRatio)
                canvasTarget.setSize(350, 350)
              }
            }}
          >
            <Three.PerspectiveCamera
              args={[75, 1, 0.1, 5]}
              sets={{
                position: { set: [2, 2, 2] },
                lookAt: [0, 0, 0],
              }}
              ref={(camera) => {
                if (camera) {
                  console.log(camera)
                  // camera.position.z = 2
                  // camera.position.x = 2
                  // camera.position.y = 2
                  // camera.lookAt(0, 0, 0)
                }
              }}
            ></Three.PerspectiveCamera>
            <Three.Mesh
              args={[
                new THREE.BoxGeometry(1, 1, 1),
                new THREE.MeshLambertMaterial({ color: 0x44aa88 }),
              ]}
            ></Three.Mesh>
            <Three.HemisphereLight
              args={[0xaaaaaa, 0x444444, 3]}
            ></Three.HemisphereLight>
            <Three.DirectionalLight
              args={[0xffffff, 1.5]}
              sets={{
                position: { set: [2, 2, -2] },
                lookAt: [0, 0, 0],
              }}
            ></Three.DirectionalLight>
          </Three.CanvasTarget>
        </Three.Scene>
      </Three.WebGPURenderer>
    </Three.Canvas>
  )
}

// console.log(R.render(<TestThree />, document.body))

// const canvas = document.createElement('canvas')
// canvas.style.backgroundColor = '#ad3'

// document.body.appendChild(canvas)

// const instance = new THREE.PerspectiveCamera()

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// const mesh = new THREE.Mesh(geometry, material)
// console.log(mesh)

// console.log(new THREE.CameraHelper(new THREE.PerspectiveCamera()))
// import WebGPU from 'three/addons/capabilities/WebGPU.js';
// console.log(111, WebGPU.isAvailable())

// const timer = new THREE.Timer()
