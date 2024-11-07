import { Component, ChangeDetectionStrategy } from "@angular/core";
import { LetDirective } from "@ngrx/component";
import { provideComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { BtnBasicComponent } from "../../shared/components/btn-basic/btn-basic.component";
import { DividerXComponent } from "../../shared/components/divider-x/divider-x.component";
import { ListTasksComponent } from "./components/list-tasks/list-tasks.component";
import { TaskEditorComponent } from "./components/task-editor/task-editor.component";
import { TaskInputFieldComponent } from "./components/task-input-field/task-input-field.component";
import { Task, TodoAction } from "./interface/task.interface";
import { FilterPipe } from "./pipes/filter.pipe";
import { TasksManagerService } from "./services/tasks-manager.service";
import { TodoApiService } from "./services/todo-api.service";
import { TodoStore } from "./store/todo.store";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [
    BtnBasicComponent,
    LetDirective,
    TaskEditorComponent,
    TaskInputFieldComponent,
    DividerXComponent,
    ListTasksComponent,
    FilterPipe,
  ],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
  providers: [
    TasksManagerService,
    TodoApiService,
    provideComponentStore(TodoStore),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  todos$: Observable<Task[]> = this.todoStore.todos$;
  isLoading$: Observable<boolean> = this.todoStore.isLoading$;
  currentFilter$: Observable<TodoAction> = this.todoStore.currentFilter$;

  constructor(private readonly todoStore: TodoStore) {}
}
