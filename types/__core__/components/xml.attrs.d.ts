import { StyleSheet, ClassNames } from '../types';
declare function style2string(v: StyleSheet): string;
export { style2string as stylesheet };
declare function class2string(v: ClassNames): string;
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
} | null | undefined): void;
