import { FC, Props, ComponentChildren } from './types';
export interface JSXNode<P extends Props = any> {
    $$: 'JSX';
    type: FC<P> | string;
    props: P;
}
export declare function isJSXNode(thing: any): thing is JSXNode;
declare function createElement(type: FC | string, props?: Props | null | undefined, ...children: ComponentChildren[]): JSXNode;
export { createElement };
