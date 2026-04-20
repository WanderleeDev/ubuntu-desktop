import { environment } from "../../../environments/environment.development";
// import {
//   Metadata,
//   OpenGraph,
//   MetaTagConfig,
// } from "../../shared/interfaces/Metadata.interface";

const title = "Ubuntu clone";
const description = "Ubuntu clone with Angular and express js";
const logo =
  "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp";

const openGraphConfig: Partial<any> = {
  "og:title": title,
  "og:description": description,
  "og:type": "website",
  "og:image": logo,
  "og:image:alt": title,
  "og:site_name": title,
  "og:url": environment.CANONICAL_URL,
  "twitter:description": description,
  "twitter:title": title,
  "twitter:card": "summary_large_image",
  "twitter:image": logo,
};

const metaTagConfig: Partial<any> = {
  author: "Wanderlee Max Gutierrez",
  keywords:
    "Ubuntu, Linux, desktop environment, web clone, Angular application, Express.js",
  description,
};

export const ubuntuCloneMetadata: any = {
  metaTags: metaTagConfig,
  ogTags: openGraphConfig,
};
