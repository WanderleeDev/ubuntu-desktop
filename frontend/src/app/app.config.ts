import { ApplicationConfig, ErrorHandler } from "@angular/core";
import { provideThemeStack } from "ngx-theme-stack";
import { AppErrorHandler } from "./shared/infrastructure/error.handler";

import { APP_PROVIDERS } from "./config";

export const appConfig: ApplicationConfig = {
  providers: [
    ...APP_PROVIDERS,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    provideThemeStack({
      themes: ["system", "light", "dark"],
      defaultTheme: "light",
      storageKey: "ngx-theme-stack",
      mode: "class",
      strategy: "blocking",
    }),
  ],
};
