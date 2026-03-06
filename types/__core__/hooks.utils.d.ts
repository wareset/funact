import { type VNode } from './VNode';
export interface IHook {
    nextHook: (IHook & {
        [key: string]: any;
    }) | null;
    hookType: (...a: any[]) => any;
    vNode: VNode;
    value: any;
    deps?: null | readonly unknown[];
    cleanup?: null | (() => void);
}
export declare function checkHook(hook: IHook, hookType: (...a: any[]) => any): void;
export declare function isEqualDeps(a: readonly unknown[] | undefined | null, b: readonly unknown[] | undefined | null): boolean;
