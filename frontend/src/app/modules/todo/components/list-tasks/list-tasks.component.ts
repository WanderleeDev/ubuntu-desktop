import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Task } from "../../interface/task.interface";
import { TaskComponent } from "../task/task.component";
import { ControlsTodoComponent } from "../controls-todo/controls-todo.component";

@Component({
  selector: "app-list-tasks",
  standalone: true,
  imports: [TaskComponent, ControlsTodoComponent],
  templateUrl: "./list-tasks.component.html",
  styleUrl: "./list-tasks.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTasksComponent {
  tasks = input.required<Task[]>();
}
