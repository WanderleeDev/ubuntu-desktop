import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideClientHydration } from "@angular/platform-browser";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { ROOT_REDUCERS, ALL_EFFECTS } from "./store/app.state";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(ROOT_REDUCERS),
    provideEffects(ALL_EFFECTS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
