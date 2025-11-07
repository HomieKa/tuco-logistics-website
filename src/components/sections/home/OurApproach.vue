<template>
  <section class="bg-[#f7f9fd] py-20">
    <div class="container mx-auto px-1">
      <div
        class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-center"
      >
        <div class="space-y-6">
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 items-center"
          >
            Our Approach
          </p>
          <h2 class="text-3xl font-semibold text-[#0a1d35] md:text-4xl">
            End-to-end logistics partnerships, built around you
          </h2>
          <p class="text-base text-[#0a1d35]">
            TUCO blends smart systems with human problem-solvers so every team
            across your business feels the impact from Operations, Finance and
            Customer Experience.
          </p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="group flex h-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
          >
            <figure class="relative overflow-hidden rounded-2xl bg-sky-50/60">
              <img
                :src="feature.image"
                :alt="feature.title"
                class="h-32 w-full object-contain p-3"
                loading="lazy"
              />
              <span
                class="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 shadow-md"
              >
                {{ feature.badge }}
              </span>
            </figure>
            <div class="flex flex-1 flex-col justify-start gap-2">
              <h3 class="text-lg font-semibold text-navy-500 min-h-[3.5rem]">
                {{ feature.title }}
              </h3>
              <p class="text-sm text-slate-600 min-h-[4rem]">
                {{ feature.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import carrierImage from "@/assets/images/approach-carrier.svg";
import financeImage from "@/assets/images/approach-finance.svg";
import serviceImage from "@/assets/images/approach-service.svg";
import strategyImage from "@/assets/images/approach-strategy.svg";
import technologyImage from "@/assets/images/approach-technology.svg";

const features = [
  {
    badge: "01",
    title: "Freightmate technology",
    description:
      "Real-time tracking, automated routing, and integration connectors keep every freight decision informed.",
    image: technologyImage,
  },
  {
    badge: "02",
    title: "Customer service & account management",
    description:
      "Australian support teams watch your network, escalate fast, and close the loop with every stakeholder.",
    image: serviceImage,
  },
  {
    badge: "03",
    title: "Carrier management",
    description:
      "We source, onboard, and govern a national carrier panel so your freight stays compliant and on time.",
    image: carrierImage,
  },
  {
    badge: "04",
    title: "Finance & reconciliation",
    description:
      "Consolidated invoices, audit-ready billing, and clear cost breakdowns keep finance teams confident.",
    image: financeImage,
  },
  {
    badge: "05",
    title: "Commercial strategy cadence",
    description:
      "Quarterly reviews surface savings opportunities, DIFOT insights, and initiatives that align freight to growth targets.",
    image: strategyImage,
  },
];
</script>
