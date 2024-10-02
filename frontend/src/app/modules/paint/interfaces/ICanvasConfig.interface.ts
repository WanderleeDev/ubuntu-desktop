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
