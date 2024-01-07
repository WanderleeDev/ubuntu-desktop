export interface IBtnData {
  nameFn: nameFn
  urlSvg: string,
  label: string,
}

export enum nameFn {
  max = 'maximize',
  min = 'minimize',
  close = 'close'
}  
