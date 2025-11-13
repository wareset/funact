declare function useState<S>(initialState: S | (() => S)): [state: S, setState: (value: S | ((prevState: S) => S)) => void];
declare function useState<S = undefined>(): [
    S | undefined,
    (value: S | ((prevState: S | undefined) => S)) => void
];
export { useState };
