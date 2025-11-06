<template>
  <div class="border-b border-gray-200 last:border-0">
    <button
      class="flex w-full items-center justify-between py-6 text-left transition"
      type="button"
      @click="isOpen = !isOpen"
    >
      <span
        class="pr-8 text-lg font-semibold text-navy-500 transition group-hover:text-teal-500"
      >
        {{ question }}
      </span>
      <div
        :class="
          isOpen
            ? 'bg-teal-500 text-white'
            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
        "
        class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition"
      >
        <svg
          :class="isOpen ? 'rotate-45' : ''"
          class="h-5 w-5 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
    </button>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="pb-6">
        <p class="text-gray-700">{{ answer }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);
</script>
