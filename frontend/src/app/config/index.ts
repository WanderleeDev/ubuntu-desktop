import { NautilusStore } from "../modules/apps/nautilus/infrastructure/nautilus.store";
import providersBase from "./providers/base.provider";
import providersRouter from "./providers/router.provider";
import providersAuth from "./providers/auth.provider";
import providersMonaco from "./providers/monaco.provider";

export * from "./metadata/metadata.seo";
export const APP_PROVIDERS = [
  ...providersBase,
  ...providersRouter,
  ...providersAuth,
  ...providersMonaco,
  NautilusStore,
];
