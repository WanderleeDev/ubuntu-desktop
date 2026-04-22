import { IMAGE_LOADER, ImageLoaderConfig } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
import {
  EnvironmentProviders,
  provideBrowserGlobalErrorListeners,
  Provider,
} from "@angular/core";

const providersBase: (Provider | EnvironmentProviders)[] = [
  provideBrowserGlobalErrorListeners(),

  provideHttpClient(withFetch()),
  {
    provide: IMAGE_LOADER,
    useValue: (config: ImageLoaderConfig) => `${config.src}`,
  },
];

export default providersBase;
