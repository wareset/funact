declare function style2string(v: any): string;
export { style2string as stylesheet };
declare function class2string(v: any): string;
export { class2string as classnames };
export declare function setAttributes(node: HTMLElement | SVGElement, newAttrs: {
    [key: string]: any;
}, oldAttrs: {
    [key: string]: any;
}): {
    [key: string]: any;
};
export declare function removeEventListeners(node: HTMLElement | SVGElement, oldAttrs: {
    [key: string]: any;
} | null | undefined): {
    [key: string]: any;
};
