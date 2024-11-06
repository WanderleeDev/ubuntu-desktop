import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ListAppComponent } from "./components/list-app/list-app.component";

@Component({
  selector: "app-desktop",
  standalone: true,
  imports: [ListAppComponent],
  templateUrl: "./desktop.component.html",
  styles: `
    :host {
      display: block;
      grid-column: 2/3;
      grid-row: 2/3;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent {}
