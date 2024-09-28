import { createReducer, on } from "@ngrx/store";
import { IAppIconsState } from "../models/app-icons.state";
import { APP_ICONS_ACTIONS } from "../actions/app-icons.actions";

export const initialState: IAppIconsState = {
  desktopIcons: [],
  sidebarMainIcons: [],
  sidebarSecondaryIcons: [],
};

export const appIconsReducer = createReducer(
  initialState,
  on(
    APP_ICONS_ACTIONS.loadDesktopsApps,
    (state, { apps }): IAppIconsState => ({
      ...state,
      desktopIcons: [...state.desktopIcons, ...apps],
    })
  ),
  on(
    APP_ICONS_ACTIONS.loadSideBarApps,
    (state, { main, secondary }): IAppIconsState => ({
      ...state,
      sidebarMainIcons: [...main],
      sidebarSecondaryIcons: [...secondary],
    })
  ),
  on(
    APP_ICONS_ACTIONS.loadAllAppsSuccess,
    (
      state,
      { desktop, sideBarMainIcons, sideBarSecondaryIcons }
    ): IAppIconsState => ({
      ...state,
      desktopIcons: [...state.desktopIcons, ...desktop],
      sidebarMainIcons: [...state.sidebarMainIcons, ...sideBarMainIcons],
      sidebarSecondaryIcons: [
        ...state.sidebarSecondaryIcons,
        ...sideBarSecondaryIcons,
      ],
    })
  )
);
