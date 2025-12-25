<template>
  <div class="registration-form-page">
    <h1>Форма регистрации</h1>
    <FormGenerator
      :fields="REGISTRATION_FIELD"
      :modelValue="formData"
      @update:modelValue="updateFormData"
      @submit="submitForm"
      @cancel="resetForm"
    >
      <template #email="{ field, value, updateValue }">
        <div class="custom-email-field">
          <label :for="field.name" class="form-field__label">{{ field.label }}</label>
          <div class="input-with-icon">
            <span class="email-icon">@</span>
            <input
              :id="field.name"
              :name="field.name"
              type="email"
              :value="value"
              v-bind="field.attrs"
              @input="(e) => updateValue(field.name, (e.target as HTMLInputElement).value)"
              class="form-field__input"
              :placeholder="field.placeholder"
            />
          </div>
        </div>
      </template>

      <template #actions="{ submit, cancel }">
        <div class="custom-actions">
          <button @click="submit" class="btn btn--primary">Зарегистрироваться</button>
          <button @click="cancel" class="btn btn--secondary">Очистить</button>
        </div>
      </template>
    </FormGenerator>

    <div class="form-data-preview">
      <h2>Текущие данные формы:</h2>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
  
import FormGenerator from '@/components/FormGenerator.vue';
import { REGISTRATION_FIELD } from '@/constants/registrationFields';
import { useForm } from '@/composables/useForm';
import store from '@/stores';
import { REGISTRATION_VALUES_EMPTY } from '@/constants/registrationValuesEmpty';

const { formData, updateFormData, resetForm, submitForm } = useForm(
  'registration-form',
  REGISTRATION_VALUES_EMPTY,
  store
  );
</script>
