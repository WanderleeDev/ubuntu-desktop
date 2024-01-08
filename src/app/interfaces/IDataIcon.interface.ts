export interface IDataIcon {
  id: string;
  icon: string;
  name: string;
}

export interface IMultiIconData {
  mainIcons: IDataIcon[];
  secondaryIcons: IDataIcon[];
}