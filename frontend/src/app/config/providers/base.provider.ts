import { IMAGE_LOADER, ImageLoaderConfig } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
import {
  EnvironmentProviders,
  provideBrowserGlobalErrorListeners,
  Provider,
} from "@angular/core";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";

const providersBase: (Provider | EnvironmentProviders)[] = [
  provideClientHydration(withEventReplay()),
  provideBrowserGlobalErrorListeners(),
  provideHttpClient(withFetch()),
  {
    provide: IMAGE_LOADER,
    useValue: (config: ImageLoaderConfig) => `${config.src}`,
  },
];

export default providersBase;
