import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

export interface WindowInstance {
  id: string;
  app: string;
  zIndex: number;
}

export const WindowManagerStore = signalStore(
  withState({
    openedApps: [] as WindowInstance[],
    nextZIndex: 100,
  }),
  withMethods(store => ({
    openApp(appId: string): void {
      const exists = store.openedApps().find(app => app.app === appId);
      if (exists) {
        this.focusApp(exists.id);
        return;
      }

      const newId = `${appId}-${Date.now()}`;
      patchState(store, state => ({
        openedApps: [
          ...state.openedApps,
          { id: newId, app: appId, zIndex: state.nextZIndex },
        ],
        nextZIndex: state.nextZIndex + 1,
      }));
    },
    focusApp(instanceId: string): void {
      patchState(store, state => ({
        openedApps: state.openedApps.map(app =>
          app.id === instanceId ? { ...app, zIndex: state.nextZIndex } : app
        ),
        nextZIndex: state.nextZIndex + 1,
      }));
    },
    closeApp(instanceId: string): void {
      patchState(store, state => ({
        openedApps: state.openedApps.filter(app => app.id !== instanceId),
      }));
    },
  }))
);
