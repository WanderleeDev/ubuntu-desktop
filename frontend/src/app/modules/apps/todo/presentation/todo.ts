import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { TodoStore } from "../infrastructure/todo.store";
import { ListTasks } from "./components/list-tasks/list-tasks";
import { TaskInputField } from "./components/task-input-field/task-input-field";
import { FilterPipe } from "./pipes/filter.pipe";

@Component({
  selector: "app-todo",
  imports: [TaskInputField, ListTasks, FilterPipe, AppWindow],
  templateUrl: "./todo.html",
  providers: [TodoStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Todo {
  protected readonly store = inject(TodoStore);

  protected readonly todos = this.store.todos;
  protected readonly isLoading = this.store.isLoading;
  protected readonly currentFilter = this.store.currentFilter;
}
