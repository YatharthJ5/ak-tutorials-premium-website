/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Anything wrapped in [square brackets] is a placeholder and is shown on the
 * site with a "to be confirmed" marker. Replace it with verified information.
 */
export const institute = {
  name: "A.K. Tutorials",
  shortName: "A.K.",
  tagline: "Learning that shows its working.",
  description:
    "A.K. Tutorials is an educational coaching institute. This is a redesign concept; institute details are placeholders until verified.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Contact. Use digits with country code for WhatsApp, e.g. "91XXXXXXXXXX".
  phone: "[Institute Phone Number]", // e.g. "+91 98XXX XXXXX"
  whatsapp: "[WhatsApp Number]", // e.g. "9198XXXXXXXX"
  email: "[Institute Email]",
  address: "[Address]",
  hours: "[Office Hours]",
  mapEmbedUrl: "", // paste a Google Maps "Embed a map" URL once the address is confirmed

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  } as Record<string, string>,

  // Editable copy
  announcement: "Admissions enquiries are open. Call or send an enquiry to confirm batch availability.",
  enquiryCta: "Enquire about admission",
  enquiryCtaShort: "Enquire now",
  demoNotice:
    "Demonstration concept. Courses, faculty, results and testimonials are sample placeholders.",
};

/** True when a value has been replaced with real data. */
export const isConfigured = (v?: string) => !!v && !v.trim().startsWith("[");

const digits = (v: string) => v.replace(/[^\d]/g, "");

export const phoneHref = () =>
  isConfigured(institute.phone)
    ? `tel:${institute.phone.trim().startsWith("+") ? "+" : ""}${digits(institute.phone)}`
    : "/contact#details";

export const whatsappHref = (text = "Hello, I would like to enquire about admission.") =>
  isConfigured(institute.whatsapp)
    ? `https://wa.me/${digits(institute.whatsapp)}?text=${encodeURIComponent(text)}`
    : "/contact#details";

export const emailHref = () => (isConfigured(institute.email) ? `mailto:${institute.email}` : "/contact#details");

export const nav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

/** Facts shown in the compact trust strip. Replace bracketed values with verified details. */
export const trustFacts = [
  { label: "Established", value: "[Year Established]" },
  { label: "Classes taught", value: "[Classes / Boards]" },
  { label: "Batch size", value: "[Verified Batch Size]" },
  { label: "Location", value: "[Area / City]" },
];
