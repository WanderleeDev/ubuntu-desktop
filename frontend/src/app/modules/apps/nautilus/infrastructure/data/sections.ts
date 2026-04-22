import { INautilusSection, NautilusSection } from "../../domain/nautilus.model";

export const NAUTILUS_SECTIONS: INautilusSection[] = [
  { id: NautilusSection.NETWORK, label: 'Network', icon: 'settings_ethernet', category: 'connectivity' },
  { id: NautilusSection.WIFI, label: 'Wi-Fi', icon: 'wifi', category: 'connectivity' },
  { id: NautilusSection.BLUETOOTH, label: 'Bluetooth', icon: 'bluetooth', category: 'connectivity' },
  
  { id: NautilusSection.BACKGROUND, label: 'Background', icon: 'image', category: 'personalization' },
  { id: NautilusSection.APPEARANCE, label: 'Appearance', icon: 'palette', category: 'personalization' },
  { id: NautilusSection.NOTIFICATIONS, label: 'Notifications', icon: 'notifications', category: 'personalization' },
  { id: NautilusSection.SEARCH, label: 'Search', icon: 'search', category: 'personalization' },
  
  { id: NautilusSection.APPLICATIONS, label: 'Applications', icon: 'apps', category: 'system' },
  { id: NautilusSection.PRIVACY, label: 'Privacy', icon: 'security', category: 'system' },
  { id: NautilusSection.USERS, label: 'Users', icon: 'person', category: 'system' },
  { id: NautilusSection.ABOUT, label: 'About', icon: 'info', category: 'system' },
];
