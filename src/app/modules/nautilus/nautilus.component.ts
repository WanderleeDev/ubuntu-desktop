import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { SidebarWindowComponent } from "./components/sidebar-window/sidebar-window.component";
import FormColorSystemComponent from "./components/form-color-system/form-color-system.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-nautilus",
  standalone: true,
  imports: [WindowWrapperComponent, SidebarWindowComponent, CommonModule],
  templateUrl: "./nautilus.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusComponent {
  @ViewChild("projectionContainer ", { read: ViewContainerRef })
  projectionContainer?: ViewContainerRef;
  profile: { new (): FormColorSystemComponent } | null = null;

  async onClick() {
    const data = await import(
      "./components/form-color-system/form-color-system.component"
    );

    this.profile = data.default;
  }
}
