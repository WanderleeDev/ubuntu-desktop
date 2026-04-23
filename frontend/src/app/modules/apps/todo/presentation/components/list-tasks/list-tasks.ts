import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Task as TaskData } from "../../../domain/task.interface";
import { Task } from "../task/task";
import { ControlsTodo } from "../controls-todo/controls-todo";

@Component({
  selector: "app-list-tasks",
  standalone: true,
  imports: [Task, ControlsTodo],
  templateUrl: "./list-tasks.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTasks {
  tasks = input.required<TaskData[]>();

  allTasksNumber = input.required<number>();
}
