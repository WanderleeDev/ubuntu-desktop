import { computed } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: "error" | "info" | "warning" | "success";
  timestamp: Date;
  icon?: string;
}

export interface NotificationState {
  history: NotificationItem[];
}

const initialState: NotificationState = {
  history: [],
};

export const NotificationStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withComputed(({ history }) => ({
    count: computed(() => history().length),
    recentNotifications: computed(() =>
      [...history()].sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
      )
    ),
  })),
  withMethods(store => ({
    addNotification(
      item: Omit<NotificationItem, "id" | "timestamp">
    ): NotificationItem {
      const newNotification: NotificationItem = {
        ...item,
        id: crypto.randomUUID(),
        timestamp: new Date(),
      };

      patchState(store, state => ({
        history: [newNotification, ...state.history],
      }));

      return newNotification;
    },
    removeNotification(id: string): void {
      patchState(store, state => ({
        history: state.history.filter(n => n.id !== id),
      }));
    },
    clearHistory(): void {
      patchState(store, { history: [] });
    },
  }))
);
