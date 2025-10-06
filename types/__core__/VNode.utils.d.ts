import { VNode } from './VNode';
export declare function getCurrentVNode(): VNode;
export declare function setCurrentVNode(vNode: VNode): void;
export declare function createChildren(vNode: VNode, jsx: any, isDeep?: boolean): void;
export declare function updateVNode(iam: VNode): void;
