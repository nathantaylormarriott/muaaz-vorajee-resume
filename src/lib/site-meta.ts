export const SITE = {
  name: "Muaaz Vorajee",
  role: "IT Support Professional",
  title: "Muaaz Vorajee — IT Support Professional",
  description:
    "Muaaz Vorajee — IT Support Professional in Birmingham. Level 1 support across calls, email and portals at TalentBegins. Open to IT opportunities.",
  shortDescription:
    "IT Support Professional · Level 1 support · Birmingham, UK · Open to IT opportunities.",
  keywords:
    "Muaaz Vorajee, IT Support, Technical Support, Customer Service Analyst, Level 1 Support, Birmingham, TalentBegins",
  email: "info@muaazvorajee.com",
  phoneDisplay: "07498 703277",
  location: "Birmingham, England, United Kingdom",
  linkedInUrl: "https://www.linkedin.com/in/muaaz-vorajee-b39011315",
  profileImage: "/muaaz-vorajee-profile.webp",
  profileImageWidth: 816,
  profileImageHeight: 1020,
  ogImage: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Muaaz Vorajee — IT Support Professional — professional headshot and resume preview",
  themeColor: "#4575E6",
} as const;

export function rootShareMeta() {
  return [
    { title: SITE.title },
    { name: "description", content: SITE.description },
    { name: "author", content: SITE.name },
    { name: "theme-color", content: SITE.themeColor },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: SITE.title },
    { property: "og:description", content: SITE.shortDescription },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_GB" },
    { property: "og:image", content: SITE.ogImage },
    { property: "og:image:width", content: String(SITE.ogImageWidth) },
    { property: "og:image:height", content: String(SITE.ogImageHeight) },
    { property: "og:image:alt", content: SITE.ogImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE.title },
    { name: "twitter:description", content: SITE.shortDescription },
    { name: "twitter:image", content: SITE.ogImage },
    { name: "twitter:image:alt", content: SITE.ogImageAlt },
  ];
}

export function pageShareMeta() {
  return [
    { title: SITE.title },
    { name: "description", content: SITE.description },
    { name: "keywords", content: SITE.keywords },
    { property: "og:title", content: SITE.title },
    { property: "og:description", content: SITE.shortDescription },
    { property: "og:type", content: "profile" },
    { property: "og:url", content: "/" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: "en_GB" },
    { property: "og:image", content: SITE.ogImage },
    { property: "og:image:width", content: String(SITE.ogImageWidth) },
    { property: "og:image:height", content: String(SITE.ogImageHeight) },
    { property: "og:image:alt", content: SITE.ogImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE.title },
    { name: "twitter:description", content: SITE.shortDescription },
    { name: "twitter:image", content: SITE.ogImage },
    { name: "twitter:image:alt", content: SITE.ogImageAlt },
  ];
}
