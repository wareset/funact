declare function useOptimistic<State>(passthrough: State): [
    optimisticState: State,
    addOptimistic: (action: State | ((pendingState: State) => State)) => void
];
declare function useOptimistic<State, Action>(passthrough: State, reducer: (state: State, action: Action) => State): [optimisticState: State, addOptimistic: (action: Action) => void];
export { useOptimistic };
