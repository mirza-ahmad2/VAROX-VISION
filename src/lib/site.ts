/** Shared site configuration for SEO, contact, and branding. */
export const SITE = {
  name: "VAROX Capital",
  url: "https://varoxcapital.com",
  tagline: "Investment-Minded Luxury Real Estate, Dubai & Abu Dhabi",
  description:
    "VAROX Capital advises HNI investors on Dubai and Abu Dhabi's most sought-after luxury properties, off-plan opportunities, land plots, and commercial real estate.",
  keywords: [
    "VAROX Capital",
    "Dubai luxury real estate",
    "Abu Dhabi real estate investment",
    "HNI property advisory",
    "off-plan Dubai",
    "trophy assets Dubai",
    "Eugenia Nita",
    "luxury property consultant UAE",
    "land plots Dubai 2025",
    "branded residences Dubai",
  ].join(", "),
  phone: "+971 52 840 1126",
  phoneHref: "tel:+971528401126",
  email: "Add here",
  emailHref: "#",
  linkedin: "https://www.linkedin.com/company/varox-capital/home/",
  otherSocial: "Add here",
  locale: "en_AE",
  ogImage: "/favicon-512x512.png",
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}
