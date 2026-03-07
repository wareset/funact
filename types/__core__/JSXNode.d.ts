import { FC, Props, Context, ComponentChildren } from './types';
export declare class JSXNode<P extends Props = Props> {
    type: FC<P> | string | Context;
    props: P;
    constructor(type: FC<P>, props: P, children: ComponentChildren[]);
    constructor(type: string, props: P, children: ComponentChildren[]);
    constructor(type: Context, props: P, children: ComponentChildren[]);
}
