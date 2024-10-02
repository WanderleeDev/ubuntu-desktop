export interface IBtnBasic {
  urlSvg: string;
  label: string;
}

export interface IBtnData extends IBtnBasic {
  nameFn: (target: HTMLElement) => void;
}

export type ICustomStylesBtn = Record<string, string>;
