<template>
  <div>
    <PageHeader
      title="Freight management partnerships that scale with you"
      description="Control every shipment, route, and carrier from one platform backed by TUCO experts."
    >
      <template #eyebrow>Services</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact">Talk to a consultant</Button>
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">Consolidate freight, optimise carriers, protect margins</h2>
          <p class="text-lg text-gray-700">
            TUCO streamlines freight management across carrier selection, booking, tracking, and reconciliation. We centralise your
            operations so every load, invoice, and KPI sits under one real-time view.
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
        <ServiceFeatures :items="featureBlocks" />
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">How delivery becomes effortless</h2>
        <ProcessSteps :steps="steps" />
      </div>
    </section>

    <CallToAction>
      <template #title>Ready to consolidate and save?</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Book a discovery call</Button>
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import CallToAction from "@/components/common/CallToAction.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import ProcessSteps from "@/components/services/ProcessSteps.vue";
import ServiceFeatures from "@/components/services/ServiceFeatures.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Freight Management - TUCO",
  description: "TUCO delivers end-to-end freight management for Australian businesses. Centralised carriers, automation, and insights."
});

const highlights = [
  "One control centre for bookings, tracking, and carrier performance",
  "Automated workflows that remove manual order processing",
  "Collaborative partnership with TUCO specialists who know your business"
];

const featureBlocks = [
  {
    title: "Carrier orchestration",
    description: "Match the right carrier to every shipment with a combination of data and human expertise.",
    points: ["200+ accredited partners", "Performance benchmarking", "Built-in SLA tracking", "Rate governance"]
  },
  {
    title: "Operational execution",
    description: "From booking to delivery, your team gains consistent, automated workflows.",
    points: ["Automated quoting", "Consolidated booking portal", "Exception management", "Branded tracking portals"]
  },
  {
    title: "Financial control",
    description: "One invoice. Zero confusion. Freightmate verifies every charge before it reaches finance.",
    points: ["Invoice validation", "Cost allocation", "Charge dispute management", "Weekly consolidated billing"]
  }
];

const steps = [
  { title: "Audit", description: "Analyse current freight spend, carrier mix, and workflow gaps." },
  { title: "Design", description: "Build a freight program tailored to your customers, locations, and timeframes." },
  { title: "Implement", description: "Launch with training, change management, and TUCO-led carrier onboarding." },
  { title: "Optimise", description: "Quarterly reviews uncover new savings, efficiencies, and growth opportunities." }
];
</script>
