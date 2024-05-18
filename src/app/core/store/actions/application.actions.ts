import { createAction, props } from "@ngrx/store";
// import { IApplication } from "../models/application.state";

const openApplication = createAction(
  "[Home] Open Application",
  props<{ name: string }>()
);

const closeApplication = createAction(
  "[Home] Close Application",
  props<{ name: string }>()
);

const toggleApplication = createAction(
  "[Home] Toggle Application",
  props<{ name: string; action: "open" | "close" }>()
);

export const APPLICATION_ACTIONS = {
  openApplication,
  closeApplication,
  toggleApplication,
};
