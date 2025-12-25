import type { IFormField } from "@/interfaces/iFormField";

export const REGISTRATION_FIELD: IFormField[] = [
  {
    name: 'username',
    type: 'input',
    label: 'Имя пользователя',
    placeholder: 'Введите имя пользователя',
    attrs: {
      required: true,
      minLength: 3,
      maxLength: 20
    }
  },
  {
    name: 'email',
    type: 'input',
    label: 'Электронная почта',
    placeholder: 'Введите email',
    inputType: 'email',
    attrs: {
      required: true
    }
  },
  {
    name: 'password',
    type: 'input',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    inputType: 'password',
    attrs: {
      required: true,
      minLength: 6
    }
  },
  {
    name: 'age',
    type: 'select',
    label: 'Возраст',
    placeholder: 'Выберите возраст',
    options: [
      { value: '18-25', label: '18-25' },
      { value: '26-35', label: '26-35' },
      { value: '36-45', label: '36-45' },
      { value: '46+', label: '46+' }
    ],
    attrs: {
      required: true
    }
  },
  {
    name: 'newsletter',
    type: 'checkbox',
    label: 'Подписка на рассылку',
    attrs: {
      value: true
    }
  },
  {
    name: 'bio',
    type: 'textarea',
    label: 'О себе',
    placeholder: 'Расскажите немного о себе',
    attrs: {
      rows: 4
    }
  },
];