<template>
  <div>
    <PageHeader
      title="Enterprise freight programs built to scale"
      description="Drive performance across national networks with TUCO’s strategic freight partnerships."
    >
      <template #eyebrow>Industries</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact">Discuss enterprise freight</Button>
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">Complex networks, simplified</h2>
          <p class="text-lg text-gray-700">
            TUCO partners with enterprise operations to consolidate carriers, integrate with legacy systems, and create a single source
            of truth. Manage dozens of sites, thousands of deliveries, and multi-modal requirements with confidence.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li v-for="point in advantages" :key="point" class="flex items-start">
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
          <h3 class="mb-4 text-xl font-semibold text-navy-500">Enterprise partnership highlights</h3>
          <ul class="space-y-4 text-gray-600">
            <li><strong class="text-navy-500">Network design:</strong> Carrier mixes tailored to service levels, locations, and products.</li>
            <li><strong class="text-navy-500">Governance:</strong> Structured QBRs, KPI reviews, and stakeholder alignment.</li>
            <li><strong class="text-navy-500">Technology:</strong> Freightmate integrations with ERP, WMS, and BI systems.</li>
            <li><strong class="text-navy-500">Resilience:</strong> Contingency planning and rapid incident response.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">Suited for complex teams</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="useCase in useCases" :key="useCase.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-navy-500">{{ useCase.title }}</h3>
            <p class="mt-2 text-gray-600">{{ useCase.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              <li v-for="item in useCase.items" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Need a partner for national scale?</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Book a strategy session</Button>
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
  title: "Enterprise Logistics - TUCO",
  description: "TUCO delivers enterprise-grade freight programs with national coverage, visibility, and accountability."
});

const advantages = [
  "Centralised control with local flexibility",
  "Carrier diversification without complexity",
  "Finance, operations, and customer teams aligned with shared data"
];

const useCases = [
  {
    title: "Multi-site manufacturers",
    description: "Coordinate inbound raw materials and outbound finished goods.",
    items: ["Cross-dock optimisation", "Mode planning", "Supplier collaboration"]
  },
  {
    title: "Retail & omnichannel",
    description: "Balance store replenishment and direct-to-consumer deliveries.",
    items: ["Store allocation", "Click & collect", "Reverse logistics"]
  },
  {
    title: "Industrial & heavy freight",
    description: "High-value freight supported with tight compliance and tracking.",
    items: ["Specialised carriers", "Chain-of-responsibility", "Live progress tracking"]
  }
];
</script>
