<template>
  <form v-if="spec" @submit="handleSubmit">
    <FormGroup v-model="spec" />

    <v-btn block disabled>TODO: Add field</v-btn>

    <v-btn class="my-4" type="submit" color="primary" block>Submit</v-btn>
  </form>

  <v-btn
    class="mt-4"
    variant="text"
    color="warning"
    block
    @click="handleCancel"
  >
    Cancel
  </v-btn>
</template>

<script setup lang="ts">
import { ICarSpecification } from "~~/types/specs/ICarSpecification.type";

const route = useRoute();
const router = useRouter();
const { get, update } = useSpecifications();

const spec = ref<ICarSpecification>();

function handleSubmit(e: Event) {
  e.preventDefault();
  update(spec.value!);
  router.push("/");
}

function handleCancel() {
  router.push("/");
}

onMounted(() => {
  spec.value = get(route.params.id as string);
});
</script>
