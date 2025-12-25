import type { IStoreState } from '@/interfaces/store/IStoreState';
import { createStore } from 'vuex';
import { formsModule } from '@/stores/forms';

const store = createStore<IStoreState>({
  modules: {
    forms: formsModule
  }
});

export default store;
