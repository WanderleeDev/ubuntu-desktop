import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { NAUTILUS_SECTIONS } from "../infrastructure/data/sections";
import { NautilusStore } from "../infrastructure/nautilus.store";
import { NautilusSidebarComponent } from "./components/nautilus-sidebar/nautilus-sidebar.component";

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
