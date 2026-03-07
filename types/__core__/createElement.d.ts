import { FC, Props, Context, ComponentChildren } from './types';
export declare class JSXNode<P extends Props = any> {
    type: FC | string | Context<any>;
    props: P;
    constructor(type: JSXNode['type'], props: JSXNode['props'] | null | undefined, children: ComponentChildren[]);
}
declare function createElement(type: FC | string | Context<any>, props?: Props | null | undefined, ...children: ComponentChildren[]): JSXNode;
export { createElement };
