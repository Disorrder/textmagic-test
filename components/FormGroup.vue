<template>
  <template v-for="field in fields" :key="field.key">
    <template v-if="field.schema.type === InputTypes.Group">
      <h3 class="my-2">{{ field.schema.label }}</h3>
      <FormGroup
        v-model="field.value"
        :schema="field.schema.children"
        @update:modelValue="(v) => handleUpdate(v, field.key)"
      />
    </template>

    <FormField
      v-else
      v-model="field.value"
      :schema="field.schema"
      @update:modelValue="(v) => handleUpdate(v, field.key)"
    />
  </template>
</template>

<script setup lang="ts">
import { IFormSchema } from "~~/types/FormSchema.type";
import { InputTypes } from "~~/types/InputTypes.enum";
import { ICarSpecification } from "~~/types/specs/ICarSpecification.type";

const props = defineProps<{
  modelValue: ICarSpecification;
  schema?: IFormSchema;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: ICarSpecification): void;
}>();

const { modelValue } = toRefs(props);

const { schema } = useSpecificationsSchema();

const formSchema = computed(() => {
  if (props.schema) {
    return props.schema;
  }

  return schema.value;
});

const { toFields } = useForm();

const fields = computed(() => {
  return toFields(props.modelValue, formSchema.value);
});

const handleUpdate = (value: any, key: string) => {
  const result = {
    ...modelValue.value,
    [key]: value,
  };
  emit("update:modelValue", result);
};
</script>
