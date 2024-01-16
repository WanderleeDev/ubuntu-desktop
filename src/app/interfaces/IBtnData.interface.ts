export interface IBtnBasic {
  urlSvg: string,
  label: string,
}

export interface IBtnData extends IBtnBasic {
  nameFn: (target: HTMLElement) => void;
}

export interface ICustomStylesBtn {
  [key: string] : string
}
