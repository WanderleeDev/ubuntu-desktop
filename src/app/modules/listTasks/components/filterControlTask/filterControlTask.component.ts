import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-filter-control-task",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./filterControlTask.component.html",
  styles: `:host { display: contents;}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterControlTaskComponent {
  controlTasks = ["pending", "completed", "clear"];
}
