export interface IDataIcon {
  id: string;
  icon: string;
  name: string;
}

export interface IAppIconsState {
  desktopIcons: IDataIcon[];
  sidebarMainIcons: IDataIcon[];
  sidebarSecondaryIcons: IDataIcon[] 
}