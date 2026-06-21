import { type VNode } from '../VNode';
export declare const XLINK: string;
export declare function createElementNS(tagName: string, parentNode: HTMLElement | SVGElement): HTMLElement | SVGElement;
type VNodeWithXMLContext = VNode & {
    xmlContext: XMLContext;
};
export type XMLContext = {
    node: HTMLElement | SVGElement | null;
    text?: string;
    attrs?: {
        [key: string]: any;
    };
    parentContext?: XMLContext;
    tempEffectDeps?: [any, any];
    childVNodes?: VNodeWithXMLContext[];
};
export declare function getParentXMLContext(vNode: VNode): XMLContext | undefined;
export declare function insertAndAddNodeInParentContext(node: HTMLElement | SVGElement, parentContext: XMLContext, vNode: VNode): void;
export declare function validateTextData(v: any): any;
export declare function destroyXMLText(vNode: VNode): void;
export declare function destroyXMLElement(vNode: VNode): void;
export {};
