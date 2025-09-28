import { FC, Comparator } from './types';
type Props = {
    [key: string]: any;
};
export declare function memo<T extends FC, C extends Comparator>(fc: T, compare?: C): {
    (props: Props): any;
    compare: Comparator;
};
export {};
