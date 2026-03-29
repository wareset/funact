import { FC, Comparator, Props } from './types';
export declare function defaultIsEqual(prevProps: Props, nextProps: Props): boolean;
export declare function memo<T extends FC, C extends Comparator>(fc: T, compare?: C): FC & {
    compare?: Comparator;
};
