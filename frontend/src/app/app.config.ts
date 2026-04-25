import { ApplicationConfig } from "@angular/core";
import { provideThemeStack } from "ngx-theme-stack";

import { APP_PROVIDERS } from "./config";

export const appConfig: ApplicationConfig = {
  providers: [
    ...APP_PROVIDERS,
    provideThemeStack({
      themes: ["system", "light", "dark"],
      defaultTheme: "light",
      storageKey: "ngx-theme-stack",
      mode: "class",
      strategy: "blocking",
    }),
  ],
};
