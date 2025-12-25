export interface IFormField {
  name: string;
  type: 'input' | 'select' | 'checkbox' | 'textarea';
  label?: string;
  placeholder?: string;
  inputType?: string;
  options?: { value: string | number; label: string }[];
  attrs?: Record<string, any>;
}
