import { onMounted, onUnmounted } from "vue";

export function useScrollAnimation(selector: string, className = "animate-fade-in-up") {
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer?.observe(element));
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
