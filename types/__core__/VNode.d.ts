import { FC, Context } from './types';
import { IHook } from './hooks.utils';
import { XMLText } from './components/xml';
export declare class VNode {
    _: string;
    alive: boolean;
    dirty: boolean;
    fc: FC | typeof XMLText | Context<any>;
    jsx: unknown;
    readonly deep: number[];
    readonly parent: VNode | null;
    readonly children: (VNode | null | undefined)[];
    contextValue?: unknown;
    contextUsers?: any[];
    readonly headHook: IHook;
    prevHook: IHook;
    constructor(parent: VNode | null, jsx: any, isJSXNode: 1 | 0, index: number);
}
