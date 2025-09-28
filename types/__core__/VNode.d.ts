import { IHook, FC } from './types';
export declare class VNode {
    _: string;
    alive: boolean;
    dirty: boolean;
    fc: FC;
    jsx: any;
    readonly deep: number[];
    readonly parent: VNode | null;
    readonly children: VNode[];
    contextValue?: any;
    contextUsers?: any[];
    hookIdx: number;
    readonly hooks: IHook[];
    constructor(parent: VNode | null, jsx: any, index?: number);
}
