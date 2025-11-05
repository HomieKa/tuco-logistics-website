<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label for="company" class="mb-2 block text-sm font-medium text-gray-800">Company Name *</label>
      <input
        id="company"
        v-model="form.company"
        required
        class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
        placeholder="Company name"
      />
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-800">Email *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label for="phone" class="mb-2 block text-sm font-medium text-gray-800">Phone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="+61 400 000 000"
        />
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label for="mode" class="mb-2 block text-sm font-medium text-gray-800">Primary freight mode</label>
        <select
          id="mode"
          v-model="form.mode"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select...</option>
          <option>Road</option>
          <option>Air</option>
          <option>Sea</option>
          <option>Rail</option>
        </select>
      </div>
      <div>
        <label for="volume" class="mb-2 block text-sm font-medium text-gray-800">Monthly consignments</label>
        <input
          id="volume"
          v-model="form.volume"
          type="number"
          min="0"
          class="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
          placeholder="e.g. 500"
        />
      </div>
    </div>
    <div>
      <label for="requirements" class="mb-2 block text-sm font-medium text-gray-800">Key requirements</label>
      <textarea
        id="requirements"
        v-model="form.requirements"
        rows="4"
        class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-teal-500"
        placeholder="Tell us about your current challenges..."
      ></textarea>
    </div>
    <Button type="submit" variant="secondary" size="lg" class="w-full md:w-auto" :loading="loading">
      {{ loading ? "Submitting..." : "Request a quote" }}
    </Button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import Button from "@/components/common/Button.vue";

const loading = ref(false);

const form = reactive({
  company: "",
  email: "",
  phone: "",
  mode: "",
  volume: "",
  requirements: ""
});

async function handleSubmit() {
  loading.value = true;
  try {
    await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Quote request sent. We'll respond shortly.");
  } catch (error) {
    alert("Unable to submit request. Please try again.");
  } finally {
    loading.value = false;
  }
}
</script>
