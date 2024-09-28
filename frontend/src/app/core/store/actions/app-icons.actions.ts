import { createAction, props } from "@ngrx/store";
import { IDataIcon } from "../models/app-icons.state";

const loadAllApps = createAction("[Home Page] Load All Apps");

const loadDesktopsApps = createAction(
  "[Desktop Page] Load Apps",
  props<{
    apps: IDataIcon[];
  }>()
);

const loadSideBarApps = createAction(
  "[SideBar] Load Apps",
  props<{
    main: IDataIcon[];
    secondary: IDataIcon[];
  }>()
);

const loadAllAppsSuccess = createAction(
  "[Home Page] Load All Apps Success",
  props<{
    desktop: IDataIcon[];
    sideBarMainIcons: IDataIcon[];
    sideBarSecondaryIcons: IDataIcon[];
  }>()
);

export const APP_ICONS_ACTIONS = {
  loadDesktopsApps,
  loadSideBarApps,
  loadAllApps,
  loadAllAppsSuccess,
};
