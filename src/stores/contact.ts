import { defineStore } from "pinia";

interface ContactFormPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactStore = defineStore("contact", {
  state: () => ({
    submissions: [] as ContactFormPayload[]
  }),
  actions: {
    submit(payload: ContactFormPayload) {
      this.submissions.push(payload);
    }
  }
});
