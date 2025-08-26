export declare class JSXNode {
    type: ((props: any) => any) | (() => any) | string;
    key: any;
    props: {
        [key: string]: any;
    };
    _pList: any[];
    _cList: any[];
    _pListChanged: null | boolean;
    _cListChanged: null | boolean;
    constructor(type: JSXNode['type'], properties: JSXNode['props'] | null | undefined, children: JSXNode['_cList']);
}
