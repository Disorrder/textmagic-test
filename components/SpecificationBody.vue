<template>
  <template v-for="field in fields">
    <div v-if="field.schema.type === InputTypes.Group">
      <h3 class="mt-3">{{ field.schema.label || field.key }}</h3>
      <div class="pl-4">
        <SpecificationBody
          :schema="field.schema.children!"
          :value="field.value"
        />
      </div>
    </div>
    <div v-else-if="!field.schema.skip">
      <b>{{ field.schema.label || field.key }}</b
      >: {{ field.value }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { IFormSchema } from "~~/types/FormSchema.type";
import { InputTypes } from "~~/types/InputTypes.enum";

interface IValue {
  [key: string]: any;
}

const props = defineProps<{
  schema: IFormSchema;
  value: IValue;
}>();

const { toFields } = useForm();

const fields = computed(() => {
  return toFields(props.value, props.schema);
});
</script>
