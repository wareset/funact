import type { RefObject } from '../types';
declare function useRef<T>(initialValue: T): RefObject<T>;
declare function useRef<T>(initialValue: T | null): RefObject<T | null>;
declare function useRef<T>(initialValue: T | undefined): RefObject<T | undefined>;
export { useRef };
