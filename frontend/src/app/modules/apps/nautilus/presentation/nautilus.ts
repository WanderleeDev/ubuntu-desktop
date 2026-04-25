import { NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
  Type,
} from "@angular/core";
import { WindowWrapper } from "../../../../layout/window-wrapper/window-wrapper";
import { NautilusSectionKey } from "../domain/nautilus.model";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { NautilusSidebar } from "./components/nautilus-sidebar/nautilus-sidebar";

@Component({
  selector: "app-nautilus",
  imports: [NgComponentOutlet, WindowWrapper, NautilusSidebar],
  templateUrl: "./nautilus.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Nautilus {
  readonly store = inject(NautilusStore);
  protected readonly currentSection = this.store.currentSection;

  private readonly LOADERS: Partial<
    Record<NautilusSectionKey, () => Promise<Type<unknown>>>
  > = {
    background: () =>
      import("./views/background/background").then(m => m.Background),
    appearance: () =>
      import("./views/appearance/appearance").then(m => m.Appearance),
    privacy: () => import("./views/privacy/privacy").then(m => m.Privacy),
    notifications: () =>
      import("./views/notifications/notifications").then(m => m.Notifications),
    about: () => import("./views/about/about").then(m => m.About),
    applications: () =>
      import("./views/applications/applications").then(m => m.Applications),
    users: () => import("./views/users/users").then(m => m.Users),
  };

  readonly activeView = resource({
    params: () => this.currentSection(),
    loader: ({ params: section }) => {
      const loader = this.LOADERS[section];
      if (loader) return loader();

      return import("./views/coming-soon/coming-soon").then(m => m.ComingSoon);
    },
  });
}
