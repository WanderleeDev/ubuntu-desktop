import { ChangeDetectionStrategy, Component } from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { SidebarWindowComponent } from "./components/sidebar-window/sidebar-window.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-nautilus",
  standalone: true,
  imports: [
    WindowWrapperComponent,
    SidebarWindowComponent,
    SidebarWindowComponent,
    RouterOutlet
  ],
  templateUrl: "./nautilus.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusComponent {}
