export enum NautilusSection {
  NETWORK = "network",
  WIFI = "wifi",
  BLUETOOTH = "bluetooth",
  BACKGROUND = "background",
  APPEARANCE = "appearance",
  NOTIFICATIONS = "notifications",
  SEARCH = "search",
  APPLICATIONS = "applications",
  PRIVACY = "privacy",
  USERS = "users",
  ABOUT = "about",
}

export type NautilusSectionKey =
  | "network"
  | "wifi"
  | "bluetooth"
  | "background"
  | "appearance"
  | "notifications"
  | "search"
  | "applications"
  | "privacy"
  | "users"
  | "about";

export interface INautilusSection {
  id: NautilusSection;
  label: string;
  icon: string;
  category: "connectivity" | "personalization" | "system";
}

export interface Wallpaper {
  id: string;
  name: string;
  thumbnail: string;
  fullRes: string;
  isDark?: boolean;
  type?: "image" | "gradient" | "color";
}

export interface NautilusState {
  currentSection: NautilusSection;
  wallpapers: Wallpaper[];
  selectedWallpaperId: string | null;
  isLoading: boolean;
  error: string | null;
}
