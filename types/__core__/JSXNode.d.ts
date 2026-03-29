import { FC, Props, Context } from './types';
export declare class JSXNode<P extends Props = any> {
    type: FC<P> | string | Context;
    props: P;
    constructor(type: FC<P>, props: P);
    constructor(type: string, props: P);
    constructor(type: Context, props: P);
}
