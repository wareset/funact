export declare function getVNodeForHook(): VNode;
export declare function getVNodeOnly(): VNode | undefined;
export declare function setVNodeOnly(vNode: VNode | undefined): void;
export declare class VNode {
    _name: string;
    fc: ((props: any) => any) | (() => any);
    jsx: any;
    alive: boolean;
    dirty: boolean;
    readonly children: VNode[];
    readonly parent: VNode | null;
    readonly deep: number[];
    hookIdx: number;
    readonly hooks: any[];
    domNode?: HTMLElement | SVGElement | null;
    domNodeAttrs?: any;
    contextValue?: any;
    contextUsers?: ((v: any) => any)[];
    constructor(parent: VNode | null, jsx: any, index?: number);
}
export declare function updateVNode(iam: VNode): void;
export declare function destroyVNodeChildren(iam: VNode): void;
export declare function destroyVNode(iam: VNode): void;
