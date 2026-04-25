import { INautilusSection } from "../../domain/nautilus.model";

export const NAUTILUS_SECTIONS: INautilusSection[] = [
  {
    id: "network",
    label: "Network",
    icon: "settings_ethernet",
    category: "connectivity",
  },
  {
    id: "wifi",
    label: "Wi-Fi",
    icon: "wifi",
    category: "connectivity",
  },
  {
    id: "bluetooth",
    label: "Bluetooth",
    icon: "bluetooth",
    category: "connectivity",
  },

  {
    id: "background",
    label: "Background",
    icon: "image",
    category: "personalization",
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: "palette",
    category: "personalization",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: "notifications",
    category: "personalization",
  },
  {
    id: "search",
    label: "Search",
    icon: "search",
    category: "personalization",
  },

  {
    id: "applications",
    label: "Applications",
    icon: "apps",
    category: "system",
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: "security",
    category: "system",
  },
  {
    id: "users",
    label: "Users",
    icon: "person",
    category: "system",
  },
  {
    id: "about",
    label: "About",
    icon: "info",
    category: "system",
  },
];
