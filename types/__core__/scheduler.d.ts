import { type VNode } from './VNode';
export declare const schedule: typeof queueMicrotask | typeof setTimeout;
export declare function addVNodeInQueue(vNode: VNode): void;
export declare function addInsertionEffectInQueue(data: any): void;
export declare function addLayoutEffectInQueue(data: any): void;
export declare function addEffectInQueue(data: any): void;
