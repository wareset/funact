import { IHook } from './types';
import { type VNode } from './VNode';
export declare const schedule: typeof queueMicrotask | typeof setTimeout;
export declare function addVNodeInQueue(vNode: VNode): void;
export declare function addInsertionOrLayoutEffectInQueue(hook: IHook, type: 'INSERTION' | 'LAYOUT'): any;
export declare function addEffectInQueue(hook: IHook): any;
