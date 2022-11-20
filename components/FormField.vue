<template>
  <v-text-field
    v-if="schema.type === InputTypes.String"
    :modelValue="modelValue"
    :label="schema.label"
    @update:modelValue="handleUpdate"
  />
  <v-select
    v-else-if="schema.type === InputTypes.Select"
    :modelValue="modelValue"
    :label="schema.label"
    :items="schema.options"
    @update:modelValue="handleUpdate"
  />
  <v-checkbox
    v-else-if="schema.type === InputTypes.Boolean"
    :modelValue="modelValue"
    :label="schema.label"
    @update:modelValue="handleUpdate"
  />
</template>

<script setup lang="ts">
import { IFormSchemaField } from "~~/types/FormSchema.type";
import { InputTypes } from "~~/types/InputTypes.enum";
import { ICarSpecification } from "~~/types/specs/ICarSpecification.type";

const props = defineProps<{
  modelValue: any;
  schema: IFormSchemaField;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: ICarSpecification): void;
}>();

function handleUpdate(value: any) {
  emit("update:modelValue", value);
}

const { modelValue } = toRefs(props);
</script>
