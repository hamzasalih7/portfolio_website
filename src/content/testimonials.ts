/**
 * Testimonials are disabled until you have real, permissioned feedback.
 * Set enabled: true on individual items and showSection: true when ready.
 */

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  feedback: string;
  category?: string;
  enabled: boolean;
};

export const testimonialsConfig = {
  showSection: false,
};

export const testimonials: Testimonial[] = [
  // Example shape — keep enabled: false until real:
  // {
  //   id: "t1",
  //   name: "Client Name",
  //   role: "Role",
  //   company: "Company",
  //   feedback: "Permissioned quote only.",
  //   category: "Web Development",
  //   enabled: false,
  // },
];

export function getEnabledTestimonials() {
  if (!testimonialsConfig.showSection) return [];
  return testimonials.filter((t) => t.enabled);
}
