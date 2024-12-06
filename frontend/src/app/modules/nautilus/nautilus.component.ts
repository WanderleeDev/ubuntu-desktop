import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { NautilusSidebarComponent } from "./components/sidebar-window/nautilus-sidebar.component";
import { ComponentType } from "./interfaces/ChildComponent.interface";
import { NgComponentOutlet } from "@angular/common";
import { fillMap } from "./utils/fillMap";
import { pathsComponent } from "./data/pathsComponents";
import { NautilusSections } from "./interfaces/Sections.emun";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { NautilusManagerService } from "./service/nautilus-manager.service";
import { NautilusErrorRenderComponent } from "./components/nautilus-error-render/nautilus-error-render.component";
import { NautilusButtonComponent } from "./components/nautilus-button/nautilus-button.component";

@Component({
  selector: "app-nautilus",
  standalone: true,
  imports: [
    WindowWrapperComponent,
    NgComponentOutlet,
    LoaderComponent,
    NautilusErrorRenderComponent,
    NautilusSidebarComponent,
    NautilusButtonComponent,
  ],
  templateUrl: "./nautilus.component.html",
  styleUrl: "./nautilus.component.css",
  providers: [NautilusManagerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusComponent {
  protected readonly sections = fillMap(pathsComponent);
  protected readonly $component = signal<ComponentType>(null);
  protected readonly $errorRender = signal<string | null>(null);
  protected readonly $currentSection =
    this.nautilusManagerSvc.getCurrentRouteStream();

  constructor(private readonly nautilusManagerSvc: NautilusManagerService) {
    effect(async () => {
      this.renderSection(this.$currentSection());
    });
  }

  public async renderSection(section: NautilusSections): Promise<void> {
    const deferComponent = this.sections.get(section);

    if (!deferComponent) return this.$component.set(null);

    try {
      const component = await deferComponent();
      this.$component.set(component?.default);
      this.$errorRender.set(null);
    } catch (error) {
      if (error instanceof Error) {
        this.$errorRender.set(error.message);
      }

      this.$errorRender.set("Error loading component");
    }
  }
}
