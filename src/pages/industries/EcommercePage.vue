<template>
  <div>
    <PageHeader
      title="Ecommerce logistics that scale with demand"
      description="Deliver faster, reduce support volume, and keep customers loyal with TUCO’s ecommerce freight program."
    >
      <template #eyebrow>Industries</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact"
          >Request an ecommerce audit</Button
        >
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">
            Win the delivery experience
          </h2>
          <p class="text-lg text-gray-700">
            TUCO helps ecommerce teams orchestrate carriers across last-mile,
            express, and bulky deliveries. From checkout to doorstep, customers
            get accurate ETAs and proactive updates while your team stays
            focused on growth.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li v-for="point in benefits" :key="point" class="flex items-start">
              <svg
                class="mr-3 h-5 w-5 flex-shrink-0 text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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
        <div
          class="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-lg"
        >
          <h3 class="mb-4 text-xl font-semibold text-navy-500">
            Optimised for modern ecommerce
          </h3>
          <ul class="space-y-4 text-gray-600">
            <li>
              <strong class="text-navy-500">Checkout experience:</strong> Live
              carrier rates, delivery promises, and pickup options.
            </li>
            <li>
              <strong class="text-navy-500">Order routing:</strong>
              Automatically select the right warehouse and carrier.
            </li>
            <li>
              <strong class="text-navy-500">Customer updates:</strong> Branded
              notifications and tracking pages that cut support volume.
            </li>
            <li>
              <strong class="text-navy-500">Returns:</strong> Simple, automated
              returns labels and workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">
          Built for fast-moving brands
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="scenario in scenarios"
            :key="scenario.title"
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
          >
            <h3 class="text-lg font-semibold text-navy-500">
              {{ scenario.title }}
            </h3>
            <p class="mt-2 text-gray-600">{{ scenario.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              <li v-for="item in scenario.items" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Make delivery a competitive advantage</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact"
          >Talk to a consultant</Button
        >
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import CallToAction from "@/components/common/CallToAction.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Ecommerce Logistics - TUCO",
  description:
    "Optimise your ecommerce delivery experience with TUCO carrier management, automation, and customer updates.",
});

const benefits = [
  "Carrier options tailored to parcel size, speed, and cost",
  "Seamless integration with ecommerce platforms and 3PLs",
  "Automations that reduce support and keep customers informed",
];

const scenarios = [
  {
    title: "High-volume parcel shipping",
    description:
      "Scale from thousands to hundreds of thousands of orders without losing control.",
    items: [
      "Dynamic carrier routing",
      "Peak season load balancing",
      "Performance monitoring",
    ],
  },
  {
    title: "Bulky ecommerce",
    description:
      "Deliver heavy and oversized items with white-glove carriers and tight coordination.",
    items: [
      "Specialised carrier network",
      "Delivery appointment scheduling",
      "Customer notifications",
    ],
  },
  {
    title: "Subscription brands",
    description: "Manage recurring deliveries with minimal manual effort.",
    items: [
      "Automated fulfilment triggers",
      "Delivery predictability dashboards",
      "Proactive churn prevention",
    ],
  },
];
</script>
