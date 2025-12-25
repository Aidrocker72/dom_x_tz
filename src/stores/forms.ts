import type { IFormState } from '@/interfaces/store/forms/IFormState';
import type { ISetFormDataPayload } from '@/interfaces/store/forms/ISetFormDataPayload';
import type { InjectionKey } from 'vue';
import { Store } from 'vuex';

export const key: InjectionKey<Store<IFormState>> = Symbol();

const mutations = {
  SET_FORM_DATA(state: IFormState, { formId, data }: ISetFormDataPayload) {
    if (!state.forms[formId]) {
      state.forms[formId] = {};
    }
    state.forms[formId] = { ...state.forms[formId], ...data };
  },
  RESET_FORM(state: IFormState, formId: string) {
    if (state.forms[formId]) {
      state.forms[formId] = {};
    }
  },
  CLEAR_FORM(state: IFormState, formId: string) {
    delete state.forms[formId];
  }
};

const actions = {
  setFormData({ commit }: { commit: (type: string, payload: any) => void }, { formId, data }: ISetFormDataPayload) {
    commit('SET_FORM_DATA', { formId, data });
  },
  resetForm({ commit }: { commit: (type: string, payload: any) => void }, formId: string) {
    commit('RESET_FORM', formId);
  },
  clearForm({ commit }: { commit: (type: string, payload: any) => void }, formId: string) {
    commit('CLEAR_FORM', formId);
  }
};

const getters = {
  getFormData: (state: IFormState) => (formId: string) => {
    return state.forms[formId] || {};
 }
};

export const formsModule = {
  namespaced: true,
  state: {
    forms: {}
  },
  mutations,
  actions,
  getters
};
