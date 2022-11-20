import { IFormSchema } from "./../types/FormSchema.type";

export function useForm() {
  function toFields(obj: any, schema: IFormSchema) {
    return Object.keys(schema).map((key) => {
      return {
        key,
        value: obj[key],
        schema: schema[key],
      };
    });
  }

  return { toFields };
}
