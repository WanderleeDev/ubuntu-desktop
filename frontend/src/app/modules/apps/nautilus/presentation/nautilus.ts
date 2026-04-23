import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapper } from "../../../../layout/window-wrapper/window-wrapper";
import { NautilusSection } from "../domain/nautilus.model";
import { NAUTILUS_SECTIONS } from "../infrastructure/data/sections";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { Background } from "./views/background/background";
import { Appearance } from "./views/appearance/appearance";
import { Privacy } from "./views/privacy/privacy";
import { Notifications } from "./views/notifications/notifications";
import { About } from "./views/about/about";
import { Applications } from "./views/applications/applications";
import { Users } from "./views/users/users";
import { NautilusSidebar } from "./components/nautilus-sidebar/nautilus-sidebar";

@Component({
  selector: "app-nautilus",
  imports: [
    CommonModule,
    WindowWrapper,
    NautilusSidebar,
    Background,
    Appearance,
    Privacy,
    Notifications,
    About,
    Applications,
    Users,
  ],
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
  readonly NautilusSection = NautilusSection;

  get currentSectionLabel(): string {
    return (
      NAUTILUS_SECTIONS.find(s => s.id === this.store.currentSection())
        ?.label || "Settings"
    );
  }
}
