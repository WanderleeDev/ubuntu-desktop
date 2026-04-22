import { Component, inject, signal, computed } from "@angular/core";
import { CalendarComponent } from "../../../../shared/ui/calendar/calendar.component";
import { ClockService } from "../../../apps/clock/services/clock.service";
import { WindowManagerStore } from "../../infrastructure/window-manager.store";

@Component({
  selector: "app-navbar-desktop",
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: "./navbar-desktop.component.html",
})
export class NavbarDesktopComponent {
  private readonly clockSvc = inject(ClockService);
  private readonly windowManager = inject(WindowManagerStore);

  isClockOpen = signal(false);

  currentTime = computed(() => {
    const now = this.clockSvc.getSignalClock()();
    return (
      now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        weekday: "short",
      }) +
      " " +
      now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  });

  openClock() {
    this.isClockOpen.update(v => !v);
  }
}
