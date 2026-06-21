import { JSXNode } from '../JSXNode';
import { IntrinsicElements as IntrinsicElementsGenerated } from './generated/IntristicElements';
export type Props = Record<string, any>;
export type ComponentChildren = JSXNode | ComponentChildren[] | object | boolean | number | bigint | string | void | null | undefined;
export type Comparator = (prevProps: Props, nextProps: Props) => boolean;
export type FC<P extends Props = any> = // | (() => ComponentChildren)
((props: P) => ComponentChildren) & {
    compare?: Comparator;
    displayName?: string;
};
export type RefObject<T> = {
    current: T | null;
};
export type RefCallback<T> = (instance: T | null) => void | (() => void);
export type Ref<T> = RefObject<T> | RefCallback<T>;
import { Properties as CSSProperties } from 'csstype';
export type StyleSheet = (CSSProperties & Record<`--${string}`, any>) | boolean | number | bigint | string | void | null | undefined | StyleSheet[];
export type ClassNames = Record<string, any> | boolean | number | bigint | string | void | null | undefined | ClassNames[];
export interface Context<T = unknown> {
    (props: {
        value: T;
        children?: ComponentChildren;
    }): ComponentChildren;
    Provider: Context<T>;
    defaultValue: T;
    displayName?: string;
}
export type TransitionFunction = () => void | undefined | Promise<void | undefined>;
export declare namespace JSX {
    export type ElementType<P = any, Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = {
        [K in Tag]: P extends JSX.IntrinsicElements[K] ? K : never;
    }[Tag] | FC;
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
    }
    export interface IntrinsicElements extends IntrinsicElementsGenerated {
        [key: `${string}-${string}`]: any;
    }
    export {};
}
