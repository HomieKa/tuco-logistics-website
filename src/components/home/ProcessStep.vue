<template>
  <div class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-500 text-lg font-bold text-white">
      {{ number }}
    </div>
    <h3 class="mb-2 text-lg font-semibold text-navy-500">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number;
  title: string;
  description: string;
}>();
</script>
