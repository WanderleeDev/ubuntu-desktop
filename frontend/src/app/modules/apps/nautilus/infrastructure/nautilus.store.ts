import { computed } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";
import { NautilusSection } from "../domain/nautilus.model";

interface NautilusState {
  currentSection: NautilusSection;
  currentWallpaper: string;
  wallpapers: string[];
  theme: "default" | "dark";
  accentColor: string;
}
const DEFAULT_WALLPAPER =
  "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp";

const initialState: NautilusState = {
  currentSection: NautilusSection.BACKGROUND,
  currentWallpaper: DEFAULT_WALLPAPER,
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
  theme: "dark",
  accentColor: "#E95420",
};

export const NautilusStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withComputed(store => ({
    totalWallpapers: computed(() => store.wallpapers().length),
  })),
  withMethods(store => ({
    setSection(section: NautilusSection): void {
      patchState(store, { currentSection: section });
    },
    selectWallpaper(url: string): void {
      patchState(store, { currentWallpaper: url });
    },
    resetWallpaper(): void {
      patchState(store, { currentWallpaper: DEFAULT_WALLPAPER });
    },
    setTheme(theme: "default" | "dark"): void {
      patchState(store, { theme });
    },
    setAccentColor(color: string): void {
      patchState(store, { accentColor: color });
    },
  }))
);
