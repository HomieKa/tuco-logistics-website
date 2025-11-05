<template>
  <section class="bg-[#f7f9fd] py-20">
    <div class="container mx-auto px-4">
      <div class="grid gap-10 lg:grid-cols-3 lg:items-start">
        <div class="space-y-6">
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">Our Approach</p>
          <h2 class="text-3xl font-semibold text-[#0a1d35] md:text-4xl">
            End-to-end logistics partnerships, built around you
          </h2>
          <p class="text-base text-[#0a1d35]">
            TUCO blends smart systems with expert insight to solve real freight challenges—delivering measurable results and long-term partnership value.
          </p>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <article class="rounded-3xl bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-navy-500">How our approach works</h3>
            <p class="mt-4 text-sm text-slate-600">
              Every TUCO partnership blends technology, service, and commercial insight. We take the time to understand your freight profile,
              align with your team, and manage carriers end-to-end so you can focus on what you do best.
            </p>
          </article>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="(feature, index) in features"
              :key="feature.title"
              class="group flex h-full flex-col gap-5 rounded-3xl bg-white p-6 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
              :class="index === 0 ? 'sm:col-span-2' : ''"
            >
              <div class="relative">
                <div class="mx-auto h-24 w-full max-w-[200px] overflow-hidden rounded-2xl bg-sky-50/60 shadow-inner">
                  <img :src="feature.image" :alt="feature.title" class="h-full w-full object-cover" loading="lazy" />
                </div>
                <div class="absolute -bottom-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 shadow-md">
                  <span class="text-base font-semibold">{{ feature.badge }}</span>
                </div>
              </div>
              <div class="mt-6 flex flex-1 flex-col gap-3">
                <h3 class="text-lg font-semibold text-navy-500">{{ feature.title }}</h3>
                <p class="text-sm text-slate-600">{{ feature.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import technologyImage from "@/assets/images/approach-technology.svg";
import serviceImage from "@/assets/images/approach-service.svg";
import carrierImage from "@/assets/images/approach-carrier.svg";
import financeImage from "@/assets/images/approach-finance.svg";
import strategyImage from "@/assets/images/approach-strategy.svg";

const features = [
  {
    badge: "01",
    title: "Freightmate technology",
    description:
      "Real-time tracking, automated quoting, and API integrations give every team the data they need to run freight with confidence.",
    image: technologyImage
  },
  {
    badge: "02",
    title: "Customer service & account management",
    description:
      "AU-based freight specialists stay close to your network with proactive updates, issue resolution, and clear stakeholder communication.",
    image: serviceImage
  },
  {
    badge: "03",
    title: "Carrier management",
    description:
      "Carrier sourcing, onboarding, and governance handled by TUCO so you can deliver reliable, compliant freight without the admin load.",
    image: carrierImage
  },
  {
    badge: "04",
    title: "Finance & reconciliation",
    description:
      "Consolidated billing, automated checks, and transparent reporting eliminate invoice chaos and keep finance teams in control.",
    image: financeImage
  },
  {
    badge: "05",
    title: "Commercial strategy reviews",
    description:
      "Quarterly reviews surface cost-saving ideas, DIFOT improvements, and opportunities to align logistics with growth targets.",
    image: strategyImage
  }
];
</script>



