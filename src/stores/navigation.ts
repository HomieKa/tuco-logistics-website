import { defineStore } from "pinia";

interface NavItem {
  label: string;
  to: string;
}

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    primary: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries/enterprise" },
      { label: "Resources", to: "/resources/insights" },
      { label: "Contact", to: "/contact" }
    ] as NavItem[]
  })
});
