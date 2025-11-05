<template>
  <article class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
    <img v-if="image" :src="image" :alt="title" class="h-48 w-full object-cover" />
    <div class="flex flex-1 flex-col p-6">
      <p class="text-sm font-semibold uppercase tracking-wide text-teal-500">{{ category }}</p>
      <h3 class="mt-2 text-xl font-semibold text-navy-500">{{ title }}</h3>
      <p class="mt-3 flex-1 text-gray-600">{{ excerpt }}</p>
      <RouterLink :to="to" class="mt-6 inline-flex items-center text-sm font-semibold text-sky-500 transition hover:text-sky-600">
        Read article
        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </RouterLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  excerpt: string;
  category: string;
  to: string;
  image?: string;
}>();
</script>
