import { useHead } from "@vueuse/head";

interface UseSEOOptions {
  title: string;
  description: string;
}

export function useSEO({ title, description }: UseSEOOptions) {
  useHead({
    title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" }
    ]
  });
}
