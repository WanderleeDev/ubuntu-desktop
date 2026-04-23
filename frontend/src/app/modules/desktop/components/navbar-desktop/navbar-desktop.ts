import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { Calendar } from "../../../../shared/ui/calendar/calendar";
import { ClockService } from "../../../apps/clock/services/clock.service";

@Component({
  selector: "app-navbar-desktop",
  imports: [DatePipe, Calendar],
  templateUrl: "./navbar-desktop.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDesktop {
  private readonly clockSvc = inject(ClockService);

  isClockOpen = signal(false);

  protected readonly now = this.clockSvc.getSignalClock();

  protected readonly statusIcons = ["lan", "volume_up", "power_settings_new"];

  openClock(): void {
    this.isClockOpen.update(v => !v);
  }
}
