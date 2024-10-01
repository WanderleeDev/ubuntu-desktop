import { CommonModule, DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
//  Angular material
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ClockComponent } from "../../../modules";
import { TodoComponent } from "../../../modules";

@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [
    DatePipe,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    TodoComponent,
    ClockComponent
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
