import type { IFormField } from "@/interfaces/iFormField";

export interface IFormGeneratorProps {
  fields: IFormField[];
  modelValue: Record<string, any>;
}
