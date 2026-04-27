import { Injector, Type } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

export interface AppInstance {
  id: string;
  comp: Type<unknown>;
  injector: Injector;
}

export interface AppManagerState {
  openedApps: AppInstance[];
  activeId: string | null;
}

const initialState: AppManagerState = {
  openedApps: [],
  activeId: null,
};

export const AppManagerStore = signalStore(
  withState(initialState),
  withMethods(store => ({
    add(instance: AppInstance): void {
      const exists = store.openedApps().find(a => a.id === instance.id);

      if (exists) return;

      patchState(store, state => ({
        openedApps: [...state.openedApps, instance],
        activeId: instance.id,
      }));
    },

    remove(id: string): void {
      patchState(store, state => {
        const newApps = state.openedApps.filter(a => a.id !== id);
        return {
          openedApps: newApps,
          activeId:
            state.activeId === id
              ? newApps.length > 0
                ? newApps[newApps.length - 1].id
                : null
              : state.activeId,
        };
      });
    },
  }))
);
