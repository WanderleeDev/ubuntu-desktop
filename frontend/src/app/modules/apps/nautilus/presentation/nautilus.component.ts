import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { NautilusSection } from "../domain/nautilus.model";
import { NAUTILUS_SECTIONS } from "../infrastructure/data/sections";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { BackgroundComponent } from "./views/background/background.component";
import { AppearanceComponent } from "./views/appearance/appearance.component";
import { PrivacyComponent } from "./views/privacy/privacy.component";
import { NautilusSidebarComponent } from "./components/nautilus-sidebar/nautilus-sidebar.component";

@Component({
  selector: "app-nautilus",
  standalone: true,
  imports: [
    CommonModule,
    WindowWrapperComponent,
    NautilusSidebarComponent,
    BackgroundComponent,
    AppearanceComponent,
    PrivacyComponent,
  ],
  templateUrl: "./nautilus.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NautilusComponent {
  readonly store = inject(NautilusStore);
  readonly NautilusSection = NautilusSection;

  get currentSectionLabel(): string {
    return (
      NAUTILUS_SECTIONS.find(s => s.id === this.store.currentSection())
        ?.label || "Settings"
    );
  }
}
