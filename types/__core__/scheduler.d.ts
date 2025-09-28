import { IHook } from './types';
import { type VNode } from './VNode';
export declare const schedule: typeof queueMicrotask | typeof setTimeout;
export declare function addVNodeInQueue(vNode: VNode): void;
export declare function addInsertionEffectInQueue(hook: IHook): void;
export declare function addLayoutEffectInQueue(hook: IHook): void;
export declare function addEffectInQueue(hook: IHook): void;
