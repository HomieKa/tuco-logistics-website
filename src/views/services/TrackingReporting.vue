<template>
  <div>
    <PageHeader
      title="Tracking & reporting that keeps every stakeholder aligned"
      description="Give customers, operations, and leadership real-time visibility into shipments, spend, and performance."
    >
      <template #eyebrow>Services</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact">Request a demo</Button>
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">See the state of your network in real-time</h2>
          <p class="text-lg text-gray-700">
            Freightmate’s analytics layer delivers live dashboards, exception alerts, and trend analysis. Teams spot issues before they
            impact customers and make faster decisions backed by data.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li v-for="point in highlights" :key="point" class="flex items-start">
              <svg class="mr-3 h-5 w-5 flex-shrink-0 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
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
        <div class="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-lg">
          <h3 class="mb-4 text-xl font-semibold text-navy-500">Visibility delivered</h3>
          <ul class="space-y-4 text-gray-600">
            <li><strong class="text-navy-500">Live dashboards:</strong> Cost, SLA, and carrier performance in one view.</li>
            <li><strong class="text-navy-500">Exception alerts:</strong> Automated notifications keep operations responsive.</li>
            <li><strong class="text-navy-500">Customer tracking:</strong> White-labelled tracking pages with real-time updates.</li>
            <li><strong class="text-navy-500">Executive summaries:</strong> Board-ready reporting with measurable ROI.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">Insights tailored to every stakeholder</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="audience in audiences" :key="audience.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-navy-500">{{ audience.title }}</h3>
            <p class="mt-2 text-gray-600">{{ audience.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              <li v-for="item in audience.items" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Turn data into action</template>
      <template #description>Equip every stakeholder with the metrics and alerts they need to stay ahead of the curve.</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">See dashboards live</Button>
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
  title: "Tracking & Reporting - TUCO",
  description: "Give your teams live visibility into freight performance, costs, and exceptions with TUCO tracking & reporting."
});

const highlights = [
  "Live dashboards and alerts tailored to each function",
  "Customer updates branded to your business",
  "Historical trend analysis to drive better decisions"
];

const audiences = [
  {
    title: "Operations",
    description: "Keep freight flowing with early warning signals.",
    items: ["Late delivery notifications", "Carrier ETA accuracy", "Exception workflows"]
  },
  {
    title: "Finance",
    description: "Control spend and improve budgeting confidence.",
    items: ["Cost per consignment", "Variance reporting", "Invoice reconciliation alerts"]
  },
  {
    title: "Sales & Customer Experience",
    description: "Deliver transparency that keeps customers informed.",
    items: ["Branded tracking links", "Automated customer updates", "Service recovery playbooks"]
  }
];
</script>
