import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavbarClockComponent } from "./components/navbarClock/navbarClock.component";
import { NavDesktopControlComponent } from "./components/navDesktopControl/navDesktopControl.component";

@Component({
  selector: "app-navbar-desktop",
  standalone: true,
  imports: [CommonModule, NavbarClockComponent, NavDesktopControlComponent],
  templateUrl: "./navbarDesktop.component.html",
  styles: [
    `
      :host {
        display: block;
        grid-column: 1/3;
        grid-row: 1/2;
        z-index: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDesktopComponent {}
