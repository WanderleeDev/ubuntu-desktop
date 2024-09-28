import { IAppIconsState } from "../models/app-icons.state";

export type sideBarIconsDto = Pick<
  IAppIconsState,
  "sidebarMainIcons" | "sidebarSecondaryIcons"
>;
