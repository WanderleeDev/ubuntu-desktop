import { ApplicationConfig } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideClientHydration } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
