import { InputTypes } from "~~/types/InputTypes.enum";

export interface IFormSchemaField<T = unknown> {
  type: InputTypes;
  label?: string;
  /** Only using when type is `select` */
  options?: T[];
  /** Only using when type is not `group` */
  defaultValue?: T;
  /** Only using when type is `group` */
  children?: IFormSchema;
  /** When `true`, value won't be rendered */
  skip?: boolean;
}

export interface IFormSchema {
  [key: string]: IFormSchemaField;
}
