export interface IBtnBasic {
  urlSvg: string,
  label: string,
}

export interface IBtnData extends IBtnBasic {
  nameFn: nameFn
}

export enum nameFn {
  max = 'maximize',
  min = 'minimize',
  close = 'close'
}

export interface ICustomStylesBtn {
  [key: string] : string
}
