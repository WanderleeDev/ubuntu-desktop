import { computed, inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from "@ngrx/signals";
import { effect } from "@angular/core";
import { StorageService } from "../../../../shared/services/storage.service";

interface SettingsState {
  currentWallpaper: string;
  wallpapers: string[];
  accentColor: string;
  doNotDisturb: boolean;
  lockScreenNotifications: boolean;
}

const STORAGE_KEY_SETTINGS = "nautilus_settings";

const initialState: SettingsState = {
  currentWallpaper:
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp",
  wallpapers: [
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553822/background4_oa6osl.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553764/background11_uyfy8o.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553763/background10_kamtdl.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553762/background9_edu9hx.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553762/background8_y1qfwe.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553761/background7_nswkou.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553760/background6_c84sqk.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553759/background5_sgtqm2.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553759/background4_sdrhcl.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553758/background3_buv4q6.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553758/background2_ve9fa9.webp",
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp",
  ],
  accentColor: "var(--color-system)",
  doNotDisturb: false,
  lockScreenNotifications: true,
};

export const SettingsStore = signalStore(
  { providedIn: "root" },
  withProps(() => ({
    _storageService: inject(StorageService),
    _document: inject(DOCUMENT),
  })),

  withState(() => {
    const storageService = inject(StorageService);
    const saved =
      storageService.getItem<Partial<SettingsState>>(STORAGE_KEY_SETTINGS) ??
      {};
    return { ...initialState, ...saved };
  }),

  withComputed(store => ({
    totalWallpapers: computed(() => store.wallpapers().length),
  })),

  withMethods(store => ({
    selectWallpaper(url: string): void {
      patchState(store, { currentWallpaper: url });
    },
    resetWallpaper(): void {
      patchState(store, { currentWallpaper: initialState.currentWallpaper });
    },
    setAccentColor(color: string): void {
      patchState(store, { accentColor: color });
    },
    toggleDoNotDisturb(): void {
      patchState(store, { doNotDisturb: !store.doNotDisturb() });
    },
    toggleLockScreenNotifications(): void {
      patchState(store, {
        lockScreenNotifications: !store.lockScreenNotifications(),
      });
    },
  })),

  withHooks(
    ({
      _storageService,
      _document,
      currentWallpaper,
      accentColor,
      doNotDisturb,
      lockScreenNotifications,
    }) => ({
      onInit: (): void => {
        effect(() => {
          const stateToSave = {
            currentWallpaper: currentWallpaper(),
            accentColor: accentColor(),
            doNotDisturb: doNotDisturb(),
            lockScreenNotifications: lockScreenNotifications(),
          };

          _storageService.setItem(STORAGE_KEY_SETTINGS, stateToSave);
        });

        effect(() => {
          _document.documentElement.style.setProperty(
            "--color-system",
            accentColor()
          );
        });
      },
    })
  )
);
