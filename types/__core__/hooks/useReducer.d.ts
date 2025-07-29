type AnyActionArg = [] | [any];
type ActionDispatch<ActionArg extends AnyActionArg> = (...args: ActionArg) => void;
declare function useReducer<S, A extends AnyActionArg>(reducer: (prevState: S, ...args: A) => S, initialState: S): [S, ActionDispatch<A>];
declare function useReducer<S, I, A extends AnyActionArg>(reducer: (prevState: S, ...args: A) => S, initialArg: I, init: (i: I) => S): [S, ActionDispatch<A>];
export { useReducer };
