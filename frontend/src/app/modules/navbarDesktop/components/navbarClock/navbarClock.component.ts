import { ChangeDetectionStrategy, Component } from "@angular/core";
//  Components
import { CalendarComponent } from "../../../../shared/ui/calendar/calendar.component";
import { ClockComponent } from "../../../clock/clock.component";
//  Material
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@Component({
  selector: "app-navbar-clock",
  standalone: true,
  imports: [
    CalendarComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    ClockComponent,
  ],
  templateUrl: "./navbarClock.component.html",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarClockComponent {
  isViewCalendar = false;

  public showCalendar() {
    this.isViewCalendar = !this.isViewCalendar;
  }
}
