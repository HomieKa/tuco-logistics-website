<template>
  <section class="bg-[#f7f9fd] py-20">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">Our Approach</p>
        <h2 class="mt-4 text-3xl font-semibold text-[#0a1d35] md:text-4xl">
          End-to-end logistics partnerships, built around you
        </h2>
        <p class="mt-4 text-base text-[#0a1d35]">
          Smart systems. Expert insight. Real results delivered through genuine collaboration.
        </p>
      </div>

      <div
        class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:grid-rows-[auto_auto]"
      >
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group flex flex-col justify-between rounded-3xl bg-white p-8 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
          :class="feature.layout"
        >
          <div>
            <div
              class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500"
            >
              <span class="text-xl font-semibold">{{ feature.badge }}</span>
            </div>
            <h3 class="text-xl font-semibold text-navy-500">{{ feature.title }}</h3>
            <p class="mt-4 text-sm text-slate-600">
              {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    badge: "01",
    title: "Freightmate technology",
    description:
      "Take full control of your freight with real-time tracking, automated quoting, and seamless integration in one powerful platform.",
    layout: "md:col-span-2 xl:col-span-6 xl:row-start-1"
  },
  {
    badge: "02",
    title: "Customer service & account management",
    description:
      "Our local team keeps your freight running smoothly with proactive support, fast resolutions, and clear, consistent communication.",
    layout: "xl:col-span-3"
  },
  {
    badge: "03",
    title: "Carrier management",
    description:
      "Depend on our expert network for safe, compliant, and reliable freight. We handle the carriers so you can focus on business.",
    layout: "xl:col-span-3"
  },
  {
    badge: "04",
    title: "Finance & reconciliation",
    description:
      "One invoice, zero hassle. TUCO simplifies freight payments with consolidated billing, error-free reconciliation, and timely processing.",
    layout: "xl:col-span-3"
  },
  {
    badge: "05",
    title: "Commercial strategy reviews",
    description:
      "Stay agile and competitive with data-driven reviews that uncover new opportunities and keep your logistics aligned with growth goals.",
    layout: "xl:col-span-3"
  }
];
</script>
