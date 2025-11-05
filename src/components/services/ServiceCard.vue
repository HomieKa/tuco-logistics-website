<template>
  <article class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
    <h3 class="mb-3 text-2xl font-semibold text-navy-500">{{ title }}</h3>
    <p class="mb-4 text-gray-600">{{ summary }}</p>
    <ul class="space-y-2 text-sm text-gray-600">
      <li v-for="feature in features" :key="feature" class="flex items-start">
        <svg class="mr-2 h-5 w-5 flex-shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  summary: string;
  features: string[];
}>();
</script>
