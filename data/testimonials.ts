/**
 * SAMPLE content only. Set `isSample: false` ONLY for genuine testimonials
 * given with the student's/parent's consent. While any entry is a sample the
 * site labels the section as sample content.
 */
export type Testimonial = { quote: string; name: string; context: string; isSample: boolean };

export const testimonials: Testimonial[] = [
  { quote: "[Genuine student or parent testimonial to be added here.]", name: "[Name]", context: "[Class / Parent]", isSample: true },
  { quote: "[Genuine student or parent testimonial to be added here.]", name: "[Name]", context: "[Class / Parent]", isSample: true },
  { quote: "[Genuine student or parent testimonial to be added here.]", name: "[Name]", context: "[Class / Parent]", isSample: true },
];
