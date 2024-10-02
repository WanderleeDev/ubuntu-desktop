import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TodoStore } from "../../store/todo.store";
import { TodoAction } from "../../interface/task.interface";

@Component({
  selector: "app-controls-todo",
  standalone: true,
  imports: [],
  templateUrl: "./controls-todo.component.html",
  styleUrl: "./controls-todo.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsTodoComponent {
  controlTasks: TodoAction[] = ["pending", "completed", "clear"];

  constructor(private readonly todoStore: TodoStore) {}
}
