const title = "Ubuntu clone";
const description = "Ubuntu clone with Angular and express js";
const logo =
  "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp";

const openGraphConfig: Record<string, string> = {
  "og:title": title,
  "og:description": description,
  "og:type": "website",
  "og:image": logo,
  "og:image:alt": title,
  "og:site_name": title,
  "twitter:description": description,
  "twitter:title": title,
  "twitter:card": "summary_large_image",
  "twitter:image": logo,
};

const metaTagConfig: Record<string, string> = {
  author: "Wanderlee Max Gutierrez",
  keywords:
    "Ubuntu, Linux, desktop environment, web clone, Angular application",
  description,
};

export interface SeoMetadata {
  metaTags: Record<string, string>;
  ogTags: Record<string, string>;
}

export const ubuntuCloneMetadata: SeoMetadata = {
  metaTags: metaTagConfig,
  ogTags: openGraphConfig,
};
