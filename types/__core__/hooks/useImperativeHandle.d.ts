import type { RefObject } from '../types';
type Ref<T> = RefObject<T | null> | null;
declare function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: readonly unknown[]): void;
export { useImperativeHandle };
