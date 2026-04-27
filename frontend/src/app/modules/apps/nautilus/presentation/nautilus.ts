import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { NautilusSidebar } from "./components/nautilus-sidebar/nautilus-sidebar";

import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { About } from "./views/about/about";
import { Appearance } from "./views/appearance/appearance";
import { Applications } from "./views/applications/applications";
import { Background } from "./views/background/background";
import { ComingSoon } from "./views/coming-soon/coming-soon";
import { Notifications } from "./views/notifications/notifications";
import { Privacy } from "./views/privacy/privacy";
import { Users } from "./views/users/users";

@Component({
  imports: [
    AppWindow,
    NautilusSidebar,
    Background,
    Appearance,
    Privacy,
    Notifications,
    About,
    Applications,
    Users,
    ComingSoon,
  ],
  providers: [NautilusStore],
  templateUrl: "./nautilus.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Nautilus {
  readonly #store = inject(NautilusStore);
  protected readonly currentSection = this.#store.currentSection;
}
