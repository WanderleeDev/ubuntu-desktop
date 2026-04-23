import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapper } from "../../../../layout/window-wrapper/window-wrapper";
import { TodoStore } from "../infrastructure/todo.store";
import { ListTasks } from "./components/list-tasks/list-tasks";
import { TaskInputField } from "./components/task-input-field/task-input-field";
import { FilterPipe } from "./pipes/filter.pipe";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [
    TaskInputField,
    ListTasks,
    FilterPipe,
    WindowWrapper,
  ],
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
