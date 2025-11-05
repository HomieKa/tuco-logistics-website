<template>
  <div class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
      <component :is="icon" class="h-6 w-6" />
    </div>
    <h3 class="mb-3 text-xl font-semibold text-navy-500">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: any;
  title: string;
  description: string;
}>();
</script>
