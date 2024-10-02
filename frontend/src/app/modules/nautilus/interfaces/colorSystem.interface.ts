export type colorsPalette =
  | "#EA551F"
  | "#797758"
  | "#647B68"
  | "#4A8700"
  | "#04895C"
  | "#2F8181"
  | "#0A70DF"
  | "#7764D8"
  | "#B14FB4"
  | "#DD3452";

export type systemHeaderColor = "#DEDEDE" | "#2F2F2F";
export type systemBodyColor = "#FAFAFA" | "#242424";

export interface ISystem {
  color: colorsPalette;
  headerColor: systemHeaderColor;
  bodyColor: systemBodyColor;
}
