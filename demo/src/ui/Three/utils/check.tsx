export function checkIsObject<T>(object: T, child: string, parent: string) {
  if (!object) throw `The "${child}" should be inside the "${parent}"!`
  return object
}
