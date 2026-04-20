import { EnvironmentProviders, isDevMode, Provider } from "@angular/core";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
// import { ROOT_REDUCERS, ALL_EFFECTS } from "../../store/app.state";

const providerStore: (Provider | EnvironmentProviders)[] = [
  provideStore({}),
  provideEffects([]),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export default providerStore;
