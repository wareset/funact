import { FC } from './types';
export declare class JSXNode {
    type: FC | string;
    props: {
        [key: string]: any;
    };
    constructor(type: JSXNode['type'], props: JSXNode['props'] | null | undefined, children: any[]);
}
