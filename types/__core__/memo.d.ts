import { FC, Comparator } from './types';
export declare function memo<T extends FC, C extends Comparator>(fc: T, compare?: C): FC & {
    compare?: Comparator;
};
