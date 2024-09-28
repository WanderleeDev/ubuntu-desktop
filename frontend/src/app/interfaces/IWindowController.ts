export interface ILogicController {
  maximize: (target: HTMLElement) => void;
  minimize: (target: HTMLElement) => void;
  close: (target: HTMLElement) => void;
}

export interface IWindowControllerStyle {
  [key: string]: string
  transformOrigin: string;
  transition: string;
}