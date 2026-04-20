import providersBase from "./providers/base.provider";
import providersRouter from "./providers/router.provider";
import providerStore from "./providers/store.provider";
import providersAuth from "./providers/auth.provider";

export * from "./metadata/metadata.seo";
export const APP_PROVIDERS = [
  ...providersBase,
  ...providersRouter,
  ...providerStore,
  ...providersAuth,
];
