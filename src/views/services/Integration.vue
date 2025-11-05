<template>
  <div>
    <PageHeader
      title="Integration & automation"
      description="Connect Freightmate to your tech stack and automate freight workflows from order to delivery."
    >
      <template #eyebrow>Services</template>
      <template #actions>
        <Button variant="primary" size="lg" to="/contact">Discuss integrations</Button>
      </template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-navy-500">Built to meet your business systems</h2>
          <p class="text-lg text-gray-700">
            TUCO's integration specialists connect Freightmate with your ERP, WMS, finance, or eCommerce stack. Data flows seamlessly so
            teams work with the same source of truth across orders, inventory, carriers, and invoices.
          </p>
          <ul class="space-y-3 text-gray-600">
            <li v-for="point in benefits" :key="point" class="flex items-start">
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
        <ServiceFeatures :items="integrationBlocks" />
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-center text-3xl font-bold text-navy-500">Automation playbooks</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="automation in automations" :key="automation.title" class="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-navy-500">{{ automation.title }}</h3>
            <p class="mt-2 text-gray-600">{{ automation.description }}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-600">
              <li v-for="item in automation.items" :key="item">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Automate freight the smart way</template>
      <template #description>Our integration team configures Freightmate to work the way your business already operates.</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Plan your integration</Button>
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import CallToAction from "@/components/common/CallToAction.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import ServiceFeatures from "@/components/services/ServiceFeatures.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Integration & Automation - TUCO",
  description: "Connect Freightmate to your systems and automate freight workflows end-to-end."
});

const benefits = [
  "Real-time data flow between Freightmate and your systems",
  "Remove double-handling and manual reconciliation",
  "Secure, scalable integrations developed by TUCO specialists"
];

const integrationBlocks = [
  {
    title: "ERP & Finance connectivity",
    description: "Align orders, cost centres, and billing across systems.",
    points: ["MYOB, NetSuite, Sage, Pronto, Xero", "Automated GL coding", "Cost centre allocation", "Invoice status sync"]
  },
  {
    title: "Warehouse & order management",
    description: "Trigger freight workflows the moment orders are ready to ship.",
    points: ["WMS integration", "Pick/pack status updates", "Label generation", "Manifest automation"]
  },
  {
    title: "Customer-facing channels",
    description: "Deliver customers real-time updates without manual steps.",
    points: ["Branded tracking pages", "Self-service delivery ETA", "Automated notifications", "Returns workflows"]
  }
];

const automations = [
  {
    title: "Order to dispatch",
    description: "Automatically select carriers and book shipments based on product, destination, and SLA rules.",
    items: ["Carrier rules engine", "Label + paperwork", "Exception routing"]
  },
  {
    title: "Invoice validation",
    description: "Every carrier invoice is cross-checked against Freightmate data before finance even sees it.",
    items: ["Automated charge matching", "Variance alerts", "Dispute workflow"]
  },
  {
    title: "Customer updates",
    description: "Send proactive branded alerts as freight hits key milestones.",
    items: ["Pickup notifications", "Delay alerts", "Delivery confirmation"]
  }
];
</script>
