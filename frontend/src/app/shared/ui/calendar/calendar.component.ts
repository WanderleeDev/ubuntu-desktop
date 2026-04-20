import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ClockComponent } from "../../../modules/clock/clock.component";
import { TodoComponent } from "../../../modules/todo/todo.component";

@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [
    DatePipe,
    TodoComponent,
    ClockComponent,
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
