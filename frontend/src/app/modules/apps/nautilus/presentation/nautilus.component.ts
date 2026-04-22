import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { NautilusSidebarComponent } from "./components/nautilus-sidebar/nautilus-sidebar.component";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { NAUTILUS_SECTIONS } from "../infrastructure/data/sections";

@Component({
  selector: "app-nautilus",
  standalone: true,
  imports: [CommonModule, WindowWrapperComponent, NautilusSidebarComponent],
  providers: [NautilusStore],
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

  get currentSectionLabel(): string {
    return (
      NAUTILUS_SECTIONS.find(s => s.id === this.store.currentSection())
        ?.label || "Settings"
    );
  }
}
