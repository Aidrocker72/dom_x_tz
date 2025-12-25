import type { IFormField } from "@/interfaces/iFormField";

export const FEEDBACK_FILDS: IFormField[] = [
  {
    name: 'name',
    type: 'input',
    label: 'Ваше имя',
    placeholder: 'Введите ваше имя',
    attrs: {
      required: true
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
    name: 'rating',
    type: 'select',
    label: 'Оценка',
    placeholder: 'Выберите оценку',
    options: [
      { value: 1, label: '1 звезда' },
      { value: 2, label: '2 звезды' },
      { value: 3, label: '3 звезды' },
      { value: 4, label: '4 звезды' },
      { value: 5, label: '5 звёзд' },
    ],
    attrs: {
      required: true
    }
  },
  {
    name: 'subject',
    type: 'select',
    label: 'Тема сообщения',
    placeholder: 'Выберите тему',
    options: [
      { value: 'bug', label: 'Сообщить об ошибке' },
      { value: 'feature', label: 'Предложить улучшение' },
      { value: 'support', label: 'Техническая поддержка' },
      { value: 'other', label: 'Другое' }
    ],
    attrs: {
      required: true
    }
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Сообщение',
    placeholder: 'Введите ваше сообщение',
    attrs: {
      rows: 6,
      required: true
    }
  },
  {
    name: 'subscribe',
    type: 'checkbox',
    label: 'Подписаться на обновления',
    attrs: {
      value: true
    }
  }
];