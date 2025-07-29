declare function useOptimistic<State>(passthrough: State): [State, (action: State | ((pendingState: State) => State)) => void];
declare function useOptimistic<State, Action>(passthrough: State, reducer: (state: State, action: Action) => State): [State, (action: Action) => void];
export { useOptimistic };
