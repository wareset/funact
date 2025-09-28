import { FC } from './types';
export declare class JSXNode {
    type: FC | string;
    key: any;
    props: {
        [key: string]: any;
    };
    constructor(type: JSXNode['type'], properties: JSXNode['props'] | null | undefined, children: any[]);
}
