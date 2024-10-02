import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
//  Angular material
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ClockComponent } from "../../../modules/clock/clock.component";
import { TodoComponent } from "../../../modules/todo/todo.component";

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
}
