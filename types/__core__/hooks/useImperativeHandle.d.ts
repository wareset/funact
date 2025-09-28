import { IRefObject } from '../types';
declare function useImperativeHandle<T, R extends T>(ref: IRefObject<T | null> | null | undefined, init: () => R, deps?: readonly unknown[]): void;
export { useImperativeHandle };
