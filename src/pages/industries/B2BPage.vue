<template>
  <div>
    <PageHeader
      title="B2B freight programs without the friction"
      description="Keep business customers supplied on time with proactive, transparent freight management."
    >
      <template #eyebrow>Industries</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact">Talk to TUCO</Button>
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">Deliver confidence to every account</h2>
          <p class="text-lg text-gray-700">
            TUCO helps B2B logistics teams manage complex order mixes, delivery windows, and customer expectations. Automation and
            analytics keep service levels high while carrier costs stay under control.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li v-for="point in strengths" :key="point" class="flex items-start">
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
          <h3 class="mb-4 text-xl font-semibold text-navy-500">How TUCO supports B2B logistics</h3>
          <ul class="space-y-4 text-gray-600">
            <li><strong class="text-navy-500">Route optimisation:</strong> Tailored runs for metro, regional, and interstate deliveries.</li>
            <li><strong class="text-navy-500">Customer visibility:</strong> Branded tracking across account portals and emails.</li>
            <li><strong class="text-navy-500">Proactive service:</strong> Dedicated support team that knows every account.</li>
            <li><strong class="text-navy-500">Invoice accuracy:</strong> Automated checks that keep finance confident in every charge.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">Common B2B workflows</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="workflow in workflows" :key="workflow.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-navy-500">{{ workflow.title }}</h3>
            <p class="mt-2 text-gray-600">{{ workflow.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              <li v-for="item in workflow.items" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Keep your customers supplied and satisfied</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Plan your freight upgrade</Button>
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
  title: "B2B Logistics Solutions - TUCO",
  description: "TUCO supports B2B freight operations with automation, transparency, and strategic carrier management."
});

const strengths = [
  "Carrier selection tailored to each B2B account",
  "Automations that keep orders moving without manual intervention",
  "Clear visibility for customers and internal teams"
];

const workflows = [
  {
    title: "Recurring replenishment",
    description: "Automate weekly or monthly runs to business customers.",
    items: ["Standing order templates", "Carrier capacity planning", "Delivery confirmation"]
  },
  {
    title: "Urgent break/fix",
    description: "Rapid response to critical customer needs with the right carrier every time.",
    items: ["Priority routing", "Service guarantees", "Exception workflows"]
  },
  {
    title: "Multi-drop metro",
    description: "Optimise multi-stop routes with dynamic manifests.",
    items: ["Load optimisation", "Driver instructions", "Real-time ETA updates"]
  }
];
</script>
