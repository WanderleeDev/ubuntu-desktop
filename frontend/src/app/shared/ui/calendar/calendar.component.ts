import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal, computed } from "@angular/core";
import ClockComponent from "../../../modules/apps/clock/clock.component";
import TodoComponent from "../../../modules/apps/todo/presentation/todo.component";

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
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  protected readonly actuallyDate = signal(new Date());
  
  protected readonly daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  protected readonly calendarDays = computed(() => {
    const now = this.actuallyDate();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    
    const days = [];
    const startDay = startOfMonth.getDay();
    
    for (let i = 0; i < startDay; i++) {
      days.push({ day: '', current: false });
    }
    
    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      days.push({ 
        day: i.toString(), 
        current: i === now.getDate() 
      });
    }
    
    return days;
  });
}
