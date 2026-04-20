import {
  provideRouter,
  withViewTransitions,
  withComponentInputBinding,
} from "@angular/router";
import { routes } from "../../app.routes";
import { EnvironmentProviders, Provider } from "@angular/core";

const providersRouter: (Provider | EnvironmentProviders)[] = [
  provideRouter(
    routes,
    withViewTransitions({ skipInitialTransition: true }),
    withComponentInputBinding()
  ),
];

export default providersRouter;
