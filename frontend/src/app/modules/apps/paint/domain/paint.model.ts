export interface PaintState {
  hasColorBar: boolean;
  hasExtraBar: boolean;
  hasFullScreen: boolean;
  hasStrokeMenu: boolean;
  currentColor: string;
  strokeWidth: number;
  clearSignal: number;
  downloadSignal: number;
}

export type strokeAction = "increment" | "decrement";
export type orientation = "vertical" | "horizontal";

export interface IPaintButton {
  label: string;
  icon?: string;
  onclick?: () => void;
}

export interface IPath2D {
  color: string;
  grosor: number;
  path: Path2D;
}

export interface ICanvasConfig {
  width: number;
  height: number;
  isDrawing: boolean;
  trazos: IPath2D[];
}
