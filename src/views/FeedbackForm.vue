<template>
  <div class="feedback-form-page">
    <h1>Форма обратной связи</h1>
    <FormGenerator
      :fields="FEEDBACK_FILDS"
      :modelValue="formData"
      @update:modelValue="updateFormData"
      @submit="submitForm"
      @cancel="resetForm"
    >
      <template #rating="{ field, value, updateValue }">
        <div class="custom-rating-field">
          <label class="form-field__label">{{ field.label }}</label>
          <div class="rating-stars">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ active: star <= (value || 0) }"
              @click="updateValue(field.name, star)"
            >
              ★
            </span>
          </div>
        </div>
      </template>

      <template #actions="{ submit, cancel }">
        <div class="custom-actions">
          <button @click="submit" class="btn btn--primary">Отправить отзыв</button>
          <button @click="cancel" class="btn btn--secondary">Сбросить</button>
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
import { FEEDBACK_FILDS } from '@/constants/feedbackFields';
import { useForm } from '@/composables/useForm';
import store from '@/stores';
import { FEEDBACK_VALUES_EMPTY } from '@/constants/feedbackValuesEmpty';

const { formData, updateFormData, resetForm, submitForm } = useForm(
  'feedback-form', 
  FEEDBACK_VALUES_EMPTY, 
  store
);
</script>
