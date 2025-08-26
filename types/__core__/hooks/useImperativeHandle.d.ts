import type { RefObject } from '../types';
declare function useImperativeHandle<T, R extends T>(ref: RefObject<T | null> | null | undefined, init: () => R, deps?: readonly unknown[]): void;
export { useImperativeHandle };
