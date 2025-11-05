<template>
  <div>
    <PageHeader
      title="Insights for high-performing freight teams"
      description="Stay ahead with TUCO perspectives on carrier strategy, technology, and commercial optimisation."
    >
      <template #eyebrow>Resources</template>
    </PageHeader>

    <section class="bg-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="article in articles"
            :key="article.title"
            :title="article.title"
            :excerpt="article.excerpt"
            :category="article.category"
            :to="article.to"
          />
        </div>
      </div>
    </section>

    <CallToAction>
      <template #title>Need tailored freight advice?</template>
      <template #description>Book time with TUCO specialists for insights specific to your network.</template>
      <template #actions>
        <Button variant="secondary" size="lg" to="/contact">Talk to a consultant</Button>
      </template>
    </CallToAction>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import CallToAction from "@/components/common/CallToAction.vue";
import PageHeader from "@/components/common/PageHeader.vue";
import BlogCard from "@/components/resources/BlogCard.vue";
import { useSEO } from "@/composables/useSEO";

useSEO({
  title: "Insights - TUCO Logistics",
  description: "Articles, guides, and freight insights from TUCO's logistics experts."
});

const articles = [
  {
    title: "The 5 carrier metrics every commercial team should watch",
    excerpt: "A concise playbook to track carrier performance, costs, and customer experience outcomes.",
    category: "Carrier Strategy",
    to: "/resources/blog/carrier-metrics"
  },
  {
    title: "How to automate invoice reconciliation without losing control",
    excerpt: "Turn error-prone manual work into a streamlined finance process with Freightmate.",
    category: "Finance",
    to: "/resources/blog/invoice-automation"
  },
  {
    title: "Designing a freight program for rapid ecommerce growth",
    excerpt: "Keep delivery promises tight as order volume scales. Here’s how leading brands do it.",
    category: "Ecommerce",
    to: "/resources/blog/freight-program-design"
  }
];
</script>
