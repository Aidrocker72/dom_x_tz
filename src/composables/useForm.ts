import type { IFormData } from '@/interfaces/IFormData';
import { ref, computed, watch } from 'vue';
import { Store } from 'vuex';

export function useForm(formId: string, initialValues: IFormData = {}, store: Store<any>) {
  const formDataFromStore = computed(() => {
    const getter = store.getters && store.getters['forms/getFormData'];
    return typeof getter === 'function' ? getter(formId) : {};
  });
  
  const formData = ref<IFormData>({ ...initialValues, ...formDataFromStore.value });

  watch(
    () => {
      const getter = store.getters && store.getters['forms/getFormData'];
      return typeof getter === 'function' ? getter(formId) : {};
    },
    (newData: IFormData) => {
      formData.value = { ...initialValues, ...newData };
    }
  );

  const updateFormData = (data: IFormData) => {
    formData.value = {
      ...formData.value,
      ...data
    };
    
    store.dispatch('forms/setFormData', {
      formId,
      data: formData.value
    });
 };

  const updateField = (fieldName: string, value: any) => {
    const newData = { ...formData.value };
    newData[fieldName] = value;
    updateFormData(newData);
  };

  const resetForm = () => {
    formData.value = { ...initialValues };
    store.dispatch('forms/resetForm', formId);
  };

  const clearForm = () => {
    formData.value = {};
    store.dispatch('forms/clearForm', formId);
 };

  const submitForm = () => {
    store.dispatch('forms/setFormData', {
      formId: formId,
      data: formData.value
    });
  };

  return {
    formData,
    updateFormData,
    updateField,
    resetForm,
    clearForm,
    submitForm
  };
}