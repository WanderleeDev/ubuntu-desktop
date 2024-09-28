export interface IApplication {
  name: string;
  isOpen: boolean;
}

export interface IApplicationState {
  currentApp: number | null;
  apps: IApplication[];
}
