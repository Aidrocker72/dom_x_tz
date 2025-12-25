// src/types/vuex.d.ts
declare module 'vuex' {
  import {
    Store as VuexStore,
    StoreOptions,
    Dispatch,
    Commit,
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from 'vuex';

  export {
    VuexStore as Store,
    StoreOptions,
    Dispatch,
    Commit,
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  };

  export function createStore<S>(options: StoreOptions<S>): VuexStore<S>;
  
  const _default: {
    Store: typeof VuexStore;
    install: (vue: any) => void;
  };
  
  export default _default;
}