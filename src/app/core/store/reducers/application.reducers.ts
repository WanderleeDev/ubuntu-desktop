import { createReducer, on } from "@ngrx/store";
import { APPLICATION_ACTIONS } from "../actions/application.actions";
import { IApplicationState } from "../models/application.state";

const initialState: IApplicationState = {
  currentApp: null,
  apps: [],
};

export const applicationReducer = createReducer(
  initialState,
  on(
    APPLICATION_ACTIONS.toggleApplication,
    (state, { name, action }): IApplicationState => {
      const appList = state.apps.map((currentApp) =>
        currentApp.name !== name
          ? currentApp
          : { ...currentApp, isOpen: action === "open" }
      );

      return { ...state, apps: appList };
    }
  )
);
