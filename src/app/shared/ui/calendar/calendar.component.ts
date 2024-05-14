import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
//  Angular material
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { SimpleClockComponent } from "../simpleClock/simpleClock.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ListTasksComponent } from "../../../components/listTasks/listTasks.component";

@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    SimpleClockComponent,
    ListTasksComponent,
  ],
  templateUrl: "./calendar.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input({ required: true }) date?: Date;
  selected!: Date | null;
  readonly actuallyDate = Date.now();
  tasks: string[] = [];

  readonly Icons = [
    {
      name: "day",
      image: "assets/clock-icons/day.svg",
    },
    {
      name: "aftermoon",
      image: "assets/clock-icons/aftermoon.svg",
    },
    {
      name: "evening",
      image: "assets/clock-icons/evening.svg",
    },
    {
      name: "sunrise",
      image: "assets/clock-icons/sunrise.svg",
    },
  ];
}
