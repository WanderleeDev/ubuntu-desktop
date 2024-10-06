import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { TodoStore } from "../../store/todo.store";
import { TodoAction } from "../../interface/task.interface";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-controls-todo",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./controls-todo.component.html",
  styleUrl: "./controls-todo.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsTodoComponent {
  taskControls: TodoAction[] = ["all", "pending", "completed"];
  activeBtn = signal(0);

  constructor(private readonly todoStore: TodoStore) {}

  public onClick(action: TodoAction, index: number): void {
    this.todoStore.changeFilter(action);
    this.activeBtn.set(index);
  }

  public clearTodo(): void {
    this.todoStore.clearTasks();
  }
}
