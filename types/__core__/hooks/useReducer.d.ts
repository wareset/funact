declare function useReducer<S, A extends [] | [any]>(reducer: (prevState: S, ...args: A) => S, initialState: S): [S, (...args: A) => void];
declare function useReducer<S, I, A extends [] | [any]>(reducer: (prevState: S, ...args: A) => S, initialArg: I, init: (i: I) => S): [S, (...args: A) => void];
export { useReducer };
