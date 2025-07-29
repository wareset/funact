declare function useSyncExternalStore<Snapshot>(subscribe: (onStoreChange: () => void) => () => void, getSnapshot: () => Snapshot, _getServerSnapshot?: () => Snapshot): Snapshot;
export { useSyncExternalStore };
