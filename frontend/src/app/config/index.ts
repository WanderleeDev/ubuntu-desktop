import { NautilusStore } from "../modules/apps/nautilus/infrastructure/nautilus.store";
import providersAuth from "./providers/auth.provider";
import providersBase from "./providers/base.provider";
import providersMonaco from "./providers/monaco.provider";
import providersRouter from "./providers/router.provider";

export * from "./metadata/metadata.seo";
export const APP_PROVIDERS = [
  ...providersBase,
  ...providersRouter,
  ...providersAuth,
  ...providersMonaco,
  NautilusStore,
];
