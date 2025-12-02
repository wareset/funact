import { type VNode } from '../VNode';
export declare const NAMESPACES_URI: {
    readonly __proto__: any;
    readonly svg: string;
    readonly math: string;
    readonly xlink: string;
};
export declare function createElementNS(tagName: string, parentNode: HTMLElement | SVGElement): HTMLElement | SVGElement;
type VNodeWithContextValue = VNode & {
    contextValue: XMLContext;
};
export type XMLContext = {
    node: HTMLElement | SVGElement | null;
    text?: string;
    attrs?: {
        [key: string]: any;
    };
    parentContext?: XMLContext;
    tempEffectDeps?: [any, any];
    childVNodes?: VNodeWithContextValue[];
};
export declare function getParentXMLContext(vNode: VNode): XMLContext | undefined;
export declare function insertAndAddNodeInParentContext(node: HTMLElement | SVGElement, parentContext: XMLContext, vNode: VNode): void;
export declare function validateTextData(v: any): any;
export declare function destroyXMLText(vNode: VNode): void;
export declare function destroyXMLElement(vNode: VNode): void;
export {};
