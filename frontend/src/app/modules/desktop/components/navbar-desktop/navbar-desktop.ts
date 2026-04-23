import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { Calendar } from "../../../../shared/ui/calendar/calendar";
import { ClockService } from "../../../apps/clock/services/clock.service";
import { WindowManagerStore } from "../../infrastructure/window-manager.store";

@Component({
  selector: "app-navbar-desktop",
  imports: [DatePipe, Calendar],
  templateUrl: "./navbar-desktop.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarDesktop {
  private readonly clockSvc = inject(ClockService);
  private readonly windowManager = inject(WindowManagerStore);

  isClockOpen = signal(false);

  protected readonly now = this.clockSvc.getSignalClock();

  openClock(): void {
    this.isClockOpen.update(v => !v);
  }
}
