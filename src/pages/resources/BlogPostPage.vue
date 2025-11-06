<template>
  <article class="bg-white py-16">
    <div class="container mx-auto max-w-4xl px-4">
      <RouterLink
        to="/resources/insights"
        class="mb-6 inline-flex items-center text-sm font-semibold text-sky-500 hover:text-sky-600"
      >
        ← Back to insights
      </RouterLink>
      <h1 class="text-4xl font-bold text-navy-500">{{ post.title }}</h1>
      <p
        class="mt-4 text-sm font-semibold uppercase tracking-wide text-teal-500"
      >
        {{ post.category }}
      </p>
      <p class="mt-2 text-gray-500">{{ post.excerpt }}</p>

      <div class="prose prose-lg mt-8 max-w-none text-gray-700">
        <p v-for="paragraph in post.body" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useSEO } from "@/composables/useSEO";

const articles = {
  "carrier-metrics": {
    title: "The 5 carrier metrics every commercial team should watch",
    category: "Carrier Strategy",
    excerpt:
      "A concise playbook to track carrier performance, costs, and customer experience outcomes across your freight network.",
    body: [
      "Carrier management doesn't need to be overwhelming. Focus on a handful of high-impact metrics to uncover improvement opportunities fast.",
      "Track on-time performance, cost-per-consignment, variance to quoted rates, damage rate, and customer satisfaction. Together they reveal how carrier decisions affect the business.",
      "Make these metrics visible to operations, finance, and customer teams. Shared dashboards keep everyone aligned with the same version of the truth.",
    ],
  },
  "invoice-automation": {
    title: "How to automate invoice reconciliation without losing control",
    category: "Finance",
    excerpt:
      "Turn error-prone manual work into a streamlined finance process with Freightmate and TUCO oversight.",
    body: [
      "Manual freight invoice reconciliation consumes time and still misses costly errors. TUCO automates the process while giving finance complete transparency.",
      "Freightmate validates each carrier charge against contracted rates and shipment data. Exceptions are flagged instantly, allowing teams to resolve issues before payment.",
      "The result is faster close cycles, fewer surprises, and audit-ready records—all without adding headcount.",
    ],
  },
  "freight-program-design": {
    title: "Designing a freight program for rapid ecommerce growth",
    category: "Ecommerce",
    excerpt:
      "Keep delivery promises tight as order volume scales. Here’s how leading brands do it.",
    body: [
      "Fast-growing ecommerce brands need freight programs that scale without sacrificing customer experience.",
      "Blend national carriers with specialised last-mile partners, automate order routing, and keep customers informed with branded notifications.",
      "Review performance monthly and adjust carrier allocations to maintain speed, quality, and cost outcomes.",
    ],
  },
} as const;

const route = useRoute();
const post = computed(() => {
  const slug = route.params.slug as keyof typeof articles;
  return (
    articles[slug] ?? {
      title: "Article not found",
      category: "Insights",
      excerpt: "The requested article could not be located.",
      body: ["Please return to the insights hub for more resources."],
    }
  );
});

useSEO({
  title: `${post.value.title} - TUCO Insights`,
  description: post.value.excerpt,
});
</script>
