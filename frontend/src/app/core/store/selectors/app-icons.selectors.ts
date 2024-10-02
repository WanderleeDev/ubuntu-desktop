import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IAppIconsState } from "../models/app-icons.state";

const selectAppIconFeature = (state: AppState): IAppIconsState =>
  state.appIconsState;

const selectAllAppIcons = createSelector(
  selectAppIconFeature,
  (state: IAppIconsState) => state
);

const selectDesktopAppIcons = createSelector(
  selectAppIconFeature,
  (state: IAppIconsState) => state.desktopIcons
);

const selectSideBarMainIcons = createSelector(
  selectAppIconFeature,
  (state: IAppIconsState) => state.sidebarMainIcons
);

const selectSideBarSecondaryIcons = createSelector(
  selectAppIconFeature,
  (state: IAppIconsState) => state.sidebarSecondaryIcons
);

export const APP_ICONS_SELECTORS = {
  selectDesktopAppIcons,
  selectSideBarMainIcons,
  selectAllAppIcons,
  selectSideBarSecondaryIcons,
};
