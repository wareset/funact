import { JSXNode } from './createElement';
export type Props = Record<any, any>;
export type ComponentChildren = JSXNode | ComponentChildren[] | object | boolean | number | bigint | string | void | null | undefined;
export type Comparator = (prevProps: Props, nextProps: Props) => boolean;
export type FC<P extends Props = Props> = (((props: P) => ComponentChildren) | (() => ComponentChildren)) & {
    compare?: Comparator;
    displayName?: string;
};
export type RefObject<T> = {
    current: T | null;
};
export type RefCallback<T> = (instance: T | null) => void | (() => void);
export type Ref<T> = RefObject<T> | RefCallback<T>;
export type StyleSheet = (CSSProperties & Record<`--${string}`, any>) | boolean | number | bigint | string | void | null | undefined | StyleSheet[];
export type ClassNames = Record<string, any> | boolean | number | bigint | string | void | null | undefined | ClassNames[];
export interface Context<T> {
    (props: {
        value: T;
        children?: ComponentChildren;
    }): ComponentChildren;
    Provider: Context<T>;
    defaultValue: T;
    displayName?: string;
}
export type TransitionFunction = () => void | undefined | Promise<void | undefined>;
import { Properties as CSSProperties } from 'csstype';
export declare namespace JSX {
    export type ElementType<P = any> = {
        [K in keyof IntrinsicElements]: P extends IntrinsicElements[K] ? K : never;
    }[keyof IntrinsicElements] | FC;
    type Defaultize<Props, Defaults> = Props extends any ? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> & // Include the remaining properties from Props
    Pick<Props, Exclude<keyof Props, keyof Defaults>> : never;
    export type LibraryManagedAttributes<Component, Props> = Component extends {
        defaultProps: infer Defaults;
    } ? Defaultize<Props, Defaults> : Props;
    export interface Element extends JSXNode {
    }
    export type ElementClass = FC;
    export interface ElementAttributesProperty {
        props: any;
    }
    export interface ElementChildrenAttribute {
        children: any;
    }
    export interface IntrinsicAttributes {
        key?: any;
    }
    type Events<T extends {
        [key: string]: any;
    }> = {
        [K in keyof T as K extends `on${infer Rest}` ? `on${Capitalize<Rest>}` | `on${Capitalize<Rest>}Capture` : K]: T[K] extends null | ((e: infer E) => any) ? E extends Event ? null | ((e: Omit<E, 'target'> & {
            target: T;
        }) => any) : T[K] : T[K];
    };
    type ElementTagNameMap<T extends {
        [key: string]: any;
    }> = {
        [K in keyof T]: Partial<Omit<Events<T[K]>, 'style' | 'className'> & {
            style: StyleSheet;
            class: ClassNames;
            className: ClassNames;
            children: any;
            ref: Ref<any>;
        }>;
    };
    interface IntrinsicSVGElements extends ElementTagNameMap<Omit<SVGElementTagNameMap, keyof HTMLElementTagNameMap | keyof MathMLElementTagNameMap>> {
    }
    interface IntrinsicMathMLElements extends ElementTagNameMap<Omit<MathMLElementTagNameMap, keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap>> {
    }
    export interface IntrinsicElements extends IntrinsicSVGElements, IntrinsicMathMLElements, ElementTagNameMap<HTMLElementTagNameMap> {
    }
    export {};
}
