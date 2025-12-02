import { VNode } from './VNode';
export declare function getCurrentVNode(): VNode;
export declare function setCurrentVNode(vNode: VNode): void;
export declare function createChildren(iam: VNode, jsx: any, index: number, isDeep?: 1): void;
export declare function updateVNode(iam: VNode): void;
