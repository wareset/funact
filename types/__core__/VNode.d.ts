import { FC, Context } from './types';
import { IHook } from './hooks.utils';
import { XMLContext } from './components/xml.utils';
import { XMLText } from './components/xml';
export declare class VNode {
    _: string;
    alive: boolean;
    dirty: boolean;
    fc: FC | typeof XMLText | Context;
    jsx: unknown;
    readonly deep: number[];
    readonly parent: VNode | null;
    readonly children: (VNode | null | undefined)[];
    context?: {
        value: any;
        users: any[];
    };
    xmlContext?: XMLContext;
    readonly headHook: IHook;
    prevHook: IHook;
    constructor(parent: VNode | null, jsx: any, isJSXNode: 1 | 0, index: number);
}
