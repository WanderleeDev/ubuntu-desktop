import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { TodoStore } from "../../../infrastructure/todo.store";
import { TodoAction } from "../../../domain/task.interface";
import { NgClass } from "@angular/common";


@Component({
  selector: "app-controls-todo",
  standalone: true,
  imports: [NgClass],


  templateUrl: "./controls-todo.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsTodoComponent {
  private readonly todoStore = inject(TodoStore);

  taskControls: TodoAction[] = ["all", "pending", "completed"];
  activeBtn = signal(0);

  public onClick(action: TodoAction, index: number): void {
    this.todoStore.changeFilter(action);
    this.activeBtn.set(index);
  }

  public clearTodo(): void {
    this.todoStore.clearTasks();
  }
}
