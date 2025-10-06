import { type VNode } from './VNode';
export type Props = {
    [key: string]: any;
};
export type Comparator = (prevProps: Props, nextProps: Props) => boolean;
export type FC = {
    (props: Props): any;
    compare?: Comparator;
} | {
    (): any;
    compare?: Comparator;
};
export interface IHook {
    hookIdx: number;
    hookType: (...a: any[]) => any;
    vNode: VNode;
    value: any;
    deps?: null | readonly unknown[];
    cleanup?: null | (() => void);
    [key: string]: any;
}
export type RefObject<T> = {
    current: T;
};
export interface IContext<T> {
    (props: {
        value: T;
        children?: any;
    }): any;
    Provider: (props: {
        value: T;
        children?: any;
    }) => any;
    defaultValue: T;
}
export type TransitionFunction = () => void | undefined | Promise<void | undefined>;
