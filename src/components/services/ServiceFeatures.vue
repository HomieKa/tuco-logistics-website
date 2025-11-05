<template>
  <section class="space-y-6">
    <div v-for="item in items" :key="item.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
      <h3 class="mb-2 text-xl font-semibold text-navy-500">{{ item.title }}</h3>
      <p class="mb-3 text-gray-600">{{ item.description }}</p>
      <ul class="grid gap-2 text-sm text-gray-600 md:grid-cols-2">
        <li v-for="point in item.points" :key="point" class="flex items-start">
          <svg class="mr-2 h-5 w-5 flex-shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ServiceFeature {
  title: string;
  description: string;
  points: string[];
}

defineProps<{
  items: ServiceFeature[];
}>();
</script>
