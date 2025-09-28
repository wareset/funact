import { type VNode } from '../VNode';
export declare const NAMESPACES_URI: {
    readonly __proto__: any;
    readonly svg: string;
    readonly math: string;
    readonly xlink: string;
};
export declare function createElementNS(tagName: string, parentNode: HTMLElement | SVGElement): HTMLElement | SVGElement;
type XMLContext = {
    nodeAttrs: any;
    node: HTMLElement | SVGElement;
    childNodes: (HTMLElement | SVGElement | null)[];
    childDeeps: number[][];
    parentContext: XMLContext;
};
export declare function getParentXMLContext(vNode: VNode): XMLContext | void;
export declare function insertAndAddNodeInParentContext(node: HTMLElement | SVGElement, parentContext: XMLContext, nodeDeep: number[]): void;
export declare function removeAndDelNodeInParentContext(node: HTMLElement | SVGElement, parentContext: XMLContext, nodeDeep: number[]): void;
export declare function validateTextData(v: any): string;
export {};
