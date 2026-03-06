import { IHook } from './hooks.utils';
import { type VNode } from './VNode';
export declare const schedule: typeof queueMicrotask | typeof setTimeout;
export declare function addVNodeInQueue(vNode: VNode): void;
export declare function addInsertionOrLayoutEffectInQueue(hook: IHook, isInsertion: 1 | 0): any;
export declare function addEffectInQueue(hook: IHook): any;
