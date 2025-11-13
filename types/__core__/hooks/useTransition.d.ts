import { TransitionFunction } from '../types';
declare function useTransition(): [
    isPending: boolean,
    startTransition: (callback: TransitionFunction) => void
];
export { useTransition };
