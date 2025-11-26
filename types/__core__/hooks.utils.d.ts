import { IHook } from './types';
export declare function checkHook(hook: IHook, hookType: (...a: any[]) => any): void;
export declare function isEqualDeps(a: readonly unknown[] | undefined | null, b: readonly unknown[] | undefined | null): boolean;
