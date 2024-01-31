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

type functionBtn = 'edit task' | 'change status' | 'delete task'; 
export interface IBtnEditingTask extends IBtnBasic {
  functionBtn: functionBtn;
}

