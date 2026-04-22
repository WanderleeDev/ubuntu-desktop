import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { ListTasksComponent } from "./components/list-tasks/list-tasks.component";
import { TaskInputFieldComponent } from "./components/task-input-field/task-input-field.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { TodoStore } from "../infrastructure/todo.store";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [
    TaskInputFieldComponent,
    ListTasksComponent,
    FilterPipe,
    WindowWrapperComponent
  ],
  templateUrl: "./todo.component.html",
  providers: [TodoStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodoComponent {
  protected readonly store = inject(TodoStore);
  
  // Expose signals explicitly for the template to avoid inference issues
  protected readonly todos = this.store.todos;
  protected readonly isLoading = this.store.isLoading;
  protected readonly currentFilter = this.store.currentFilter;
}



