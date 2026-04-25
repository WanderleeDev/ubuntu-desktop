import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import Clock from "../../../modules/apps/clock/clock";
import { SwitchComponent } from "../../components/switch/switch";

@Component({
  selector: "app-calendar",
  imports: [DatePipe, Clock, SwitchComponent],
  templateUrl: "./calendar.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calendar {
  protected readonly actuallyDate = signal(new Date());
  protected readonly isSilentMode = signal(false);

  protected readonly daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  protected readonly calendarDays = computed(() => {
    const now = this.actuallyDate();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const days = [];
    const startDay = startOfMonth.getDay();

    for (let i = 0; i < startDay; i++) {
      days.push({ day: "", current: false });
    }

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push({
        day: i.toString(),
        current: i === now.getDate(),
      });
    }

    return days;
  });
}
