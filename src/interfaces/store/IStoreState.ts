import type { IFormState } from "./forms/IFormState";
import type { IRootState } from "./IRootState";

export interface IStoreState extends IRootState {
  forms: IFormState;
}