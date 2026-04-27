export interface AppIcon {
  id: string;
  icon: string;
  app: string;
}

export interface DesktopIcon extends AppIcon {
  name: string;
}
