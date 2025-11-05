<template>
  <article class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
      <slot name="icon">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </slot>
    </div>
    <h3 class="mb-3 text-xl font-semibold text-navy-500">
      <slot name="title" />
    </h3>
    <p class="text-gray-600">
      <slot name="description" />
    </p>
    <div v-if="$slots.footer" class="mt-6">
      <slot name="footer" />
    </div>
  </article>
</template>
