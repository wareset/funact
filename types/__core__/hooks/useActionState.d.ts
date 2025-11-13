declare function useActionState<State>(action: (state: Awaited<State>) => State | Promise<State>, initialState: Awaited<State>): [state: Awaited<State>, formAction: () => void, isPending: boolean];
declare function useActionState<State, Payload>(action: (state: Awaited<State>, payload: Payload) => State | Promise<State>, initialState: Awaited<State>): [
    state: Awaited<State>,
    formAction: (payload: Payload) => void,
    isPending: boolean
];
export { useActionState };
