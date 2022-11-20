<template>
  <v-card
    class="Specification my-4"
    :elevation="hovered ? 12 : 2"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="handleClick"
  >
    <v-card-title>{{ value.name }}</v-card-title>
    <v-card-text>
      <SpecificationBody :schema="schema" :value="value"></SpecificationBody>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="error" variant="outlined" @click="handleDelete">
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ICarSpecification } from "~~/types/specs/ICarSpecification.type";

const props = defineProps<{
  value: ICarSpecification;
}>();

const router = useRouter();
const { remove } = useSpecifications();
const { schema } = useSpecificationsSchema();

const { value } = toRefs(props);
const hovered = ref(false);

function handleClick() {
  router.push(`/${value.value.id}`);
}

function handleDelete(e: MouseEvent) {
  e.stopPropagation();
  remove(value.value.id);
}
</script>

<style scoped>
.Specification {
  cursor: pointer;
}
</style>
