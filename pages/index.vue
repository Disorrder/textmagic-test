<template>
  <h2 class="my-6">Specifications</h2>
  <Specification v-for="spec in specifications" :value="spec" />
  <NuxtLink to="/create">
    <v-btn block disabled>TODO: Create Specification</v-btn>
  </NuxtLink>
</template>

<script setup lang="ts">
const { specifications } = useSpecifications();
</script>
