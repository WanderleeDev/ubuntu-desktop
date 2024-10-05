//  Components
import { BtnBasicComponent } from "../../shared/components/btn-basic/btn-basic.component";
//  Interface
import { Observable } from "rxjs";
import { Task } from "./interface/task.interface";
//  Store
import { TodoStore } from "./store/todo.store";
//  Services
import { TasksManagerService } from "./services/tasks-manager.service";
import { TodoApiService } from "./services/todo-api.service";

import { LetDirective } from "@ngrx/component";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TaskEditorComponent } from "./components/task-editor/task-editor.component";
import { TaskInputFieldComponent } from "./components/task-input-field/task-input-field.component";
import { DividerXComponent } from "../../shared/components/divider-x/divider-x.component";
import { ListTasksComponent } from "./components/list-tasks/list-tasks.component";
import { provideComponentStore } from "@ngrx/component-store";

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

  constructor(private readonly todoStore: TodoStore) {}
}
