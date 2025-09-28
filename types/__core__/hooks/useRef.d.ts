import type { IRefObject } from '../types';
declare function useRef<T>(initialValue: T): IRefObject<T>;
declare function useRef<T>(initialValue: T | null): IRefObject<T | null>;
declare function useRef<T>(initialValue: T | undefined): IRefObject<T | undefined>;
export { useRef };
