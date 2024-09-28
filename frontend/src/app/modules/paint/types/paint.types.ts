import { PaintState } from "../interfaces/IPaintState.interface";

export type orientation = "horizontal" | "vertical";
export type strokeAction = "increment" | "decrement";
export type paintStateDTO = Omit<PaintState, "currentColor" | "strokeWidth">;
