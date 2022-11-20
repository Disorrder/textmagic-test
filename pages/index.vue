<template>
  <h2 class="my-6">Specifications</h2>
  <Specification v-for="spec in specifications" :value="spec" />
</template>

<script setup lang="ts">
const { schema } = useSpecificationsSchema();
const { specifications, add } = useSpecifications();
</script>
