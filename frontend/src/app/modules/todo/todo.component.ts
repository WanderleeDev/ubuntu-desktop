//  Components
import { BtnBasicComponent } from "../../shared/components/btn-basic/btn-basic.component";
import { ControlsTodoComponent } from "./components/controls-todo/controls-todo.component";
import { TaskComponent } from "./components/task/task.component";
//  Interface
import { Observable } from "rxjs";
import { Task } from "./interface/task.interface";
//  Store
import { TodoStore } from "./store/todo.store";
//  Services
import { TasksManagerService } from "./services/tasks-manager.service";
//  Others
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { LetDirective } from "@ngrx/component";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TaskEditorComponent } from "./components/task-editor/task-editor.component";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnBasicComponent,
    ControlsTodoComponent,
    TaskComponent,
    LetDirective,
    TaskEditorComponent,
  ],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
  providers: [TodoStore, TasksManagerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  todos$: Observable<Task[]> = this.todoStore.todos$;
  inputTask = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("^[a-zA-Z0-9]*$"),
    ],
  });

  constructor(private readonly todoStore: TodoStore) {}

  public addTask(): void {
    if (this.inputTask.invalid || !this.inputTask.value.trim()) return;

    this.todoStore.addTask(this.inputTask.value.trim());
  }
}
