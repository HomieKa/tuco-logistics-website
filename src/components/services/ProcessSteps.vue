<template>
  <section class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <div v-for="(step, index) in steps" :key="step.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
      <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-600">
        {{ index + 1 }}
      </div>
      <h3 class="mb-2 text-lg font-semibold text-navy-500">{{ step.title }}</h3>
      <p class="text-gray-600">{{ step.description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  steps: Array<{ title: string; description: string }>;
}>();
</script>
