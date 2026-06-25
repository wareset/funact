export * from './check'
export * from './context'
export * from './is'
export * from './return'
export * from './sets'
export * from './shared'
export * from './use'

// import { Object3DContext } from './context'
// export function returnObject3DContext<T extends THREE.Object3D>(
//   instance: T,
//   children: any
// ) {
//   return <Object3DContext value={instance}>{children}</Object3DContext>
// }

// function isNeedUpdateValue<T extends THREE.Object3D>(
//   instance: T,
//   value: any,
//   key: any
// ) {
//   return is(instance.userData[key], value)
//     ? false
//     : ((instance.userData[key] = value), true)
// }

// export function checkColorValue<
//   T extends THREE.Object3D,
//   K extends {
//     [P in keyof T]: T[P] extends THREE.Color ? P : never
//   }[keyof T],
// >(instance: T, value: THREE.ColorRepresentation | undefined, key: K) {
//   if (isNeedUpdateValue(instance, value, key)) {
//     instance[key] = (
//       value instanceof THREE.Color ? value : new THREE.Color(value)
//     ) as any
//   }
// }

// export function checkNumberValue<
//   T extends THREE.Object3D,
//   K extends {
//     [P in keyof T]: T[P] extends number ? P : never
//   }[keyof T],
// >(instance: T, value: number | undefined, key: K) {
//   if (isNeedUpdateValue(instance, value, key)) {
//     if (typeof value === 'number') instance[key] = value as any
//   }
// }
