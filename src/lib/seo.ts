import { SITE, absoluteUrl } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
};

/** Build TanStack Router `head()` meta + links for a page. */
export function pageSeo({
  title,
  description,
  path,
  keywords = SITE.keywords,
  image = SITE.ogImage,
  type = "website",
}: SeoInput) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#141414" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: SITE.locale },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  };
}
