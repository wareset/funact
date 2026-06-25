import 'heract'
import 'three'
import 'three/webgpu'
import 'three/tsl'
import './ui'
import './ui/Three'

declare global {
  declare namespace R {
    export * from 'heract'
  }
  declare namespace THREE {
    export * from 'three'
    // export * from 'three/webgpu'
    // export * from 'three/tsl'
    export * as WebGPU from 'three/webgpu'
    export * as TSL from 'three/tsl'
  }

  declare namespace UI {
    export * from './ui'
  }

  declare namespace Three {
    export * from './ui/Three'
  }
}
