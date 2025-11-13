declare function useReducer<S, A extends [] | [any]>(reducer: (prevState: S, ...args: A) => S, initialState: S): [state: S, dispatch: (...args: A) => void];
declare function useReducer<S, I, A extends [] | [any]>(reducer: (prevState: S, ...args: A) => S, initialArg: I, init: (i: I) => S): [state: S, dispatch: (...args: A) => void];
export { useReducer };
