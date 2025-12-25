<template>
  <form @submit.prevent="handleSubmit" class="form-generator">
    <div 
      v-for="field in fields" 
      :key="field.name"
      :class="['form-field', `form-field--${field.type}`]"
    >
      <!-- Label -->
      <label v-if="field.label" :for="field.name" class="form-field__label">
        {{ field.label }}
      </label>

      <!-- Input field -->
      <input
        v-if="field.type === 'input'"
        :id="field.name"
        :name="field.name"
        :type="field.inputType || 'text'"
        :placeholder="field.placeholder"
        :value="modelValue[field.name]"
        v-bind="field.attrs"
        @input="handleInput"
        class="form-field__input"
      />

      <!-- Textarea field -->
      <textarea
        v-else-if="field.type === 'textarea'"
        :id="field.name"
        :name="field.name"
        :placeholder="field.placeholder"
        :value="modelValue[field.name]"
        v-bind="field.attrs"
        @input="handleInput"
        class="form-field__textarea"
      ></textarea>

      <!-- Select field -->
      <select
        v-else-if="field.type === 'select'"
        :id="field.name"
        :name="field.name"
        :value="modelValue[field.name]"
        v-bind="field.attrs"
        @change="handleInput"
        class="form-field__select"
      >
        <option value="" v-if="field.placeholder">{{ field.placeholder }}</option>
        <option
          v-for="option in field.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <div v-else-if="field.type === 'checkbox'" class="form-field__checkbox-wrapper">
        <input
          :id="field.name"
          :name="field.name"
          type="checkbox"
          :checked="modelValue[field.name]"
          v-bind="field.attrs"
          @change="handleInput"
          class="form-field__checkbox"
        />
        <label :for="field.name" class="form-field__checkbox-label">
          {{ field.label }}
        </label>
      </div>

      <slot :name="field.name" :field="field" :value="modelValue[field.name]" :updateValue="updateValue">
      </slot>
    </div>

    <div class="form-actions">
      <slot name="actions" :submit="handleSubmit" :cancel="handleCancel">
        <button type="submit" class="btn btn--primary">Сохранить</button>
        <button type="button" @click="handleCancel" class="btn btn--secondary">Отмена</button>
      </slot>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IFormGenratorEmits } from '@/interfaces/emits/IFormGeneratorEmits';
import type { IFormGeneratorProps } from '@/interfaces/props/IFormGenerator';

const props = defineProps<IFormGeneratorProps>();
const emit = defineEmits<IFormGenratorEmits>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  const name = target.name;
  let value: any;

  if (target.type === 'checkbox') {
    value = (target as HTMLInputElement).checked;
  } else {
    value = target.value;
  }

  const updatedValue = {
    ...props.modelValue,
    [name]: value
  };

  emit('update:modelValue', updatedValue);
};

const updateValue = (fieldName: string, value: any) => {
  const updatedValue = {
    ...props.modelValue,
    [fieldName]: value
 };

  emit('update:modelValue', updatedValue);
};

const handleSubmit = () => {
  emit('submit', props.modelValue);
};

const handleCancel = () => {
  emit('cancel');
};
</script>
