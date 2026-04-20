export enum NautilusSection {
  NETWORK = 'network',
  WIFI = 'wifi',
  BLUETOOTH = 'bluetooth',
  BACKGROUND = 'background',
  APPEARANCE = 'appearance',
  NOTIFICATIONS = 'notifications',
  SEARCH = 'search',
  APPLICATIONS = 'applications',
  PRIVACY = 'privacy',
  USERS = 'users',
  ABOUT = 'about'
}

export interface INautilusSection {
  id: NautilusSection;
  label: string;
  icon: string;
  category: 'connectivity' | 'personalization' | 'system';
}

export interface NautilusState {
  currentSection: NautilusSection;
  isLoading: boolean;
  error: string | null;
}
