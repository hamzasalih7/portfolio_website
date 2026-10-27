import type { Locale } from "@/i18n/config";

/**
 * Testimonials stay hidden until real, permissioned feedback exists.
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

export function getEnabledTestimonials(_locale: Locale): Testimonial[] {
  if (!testimonialsConfig.showSection) return [];
  return [];
}
