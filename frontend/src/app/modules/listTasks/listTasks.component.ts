import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
//  Interface
import { BtnBasicComponent } from "../../shared/components/btn-basic/btn-basic.component";
import { TaskComponent } from "./components/task/task.component";
import { FilterControlTaskComponent } from "./components/filterControlTask/filterControlTask.component";
import { Observable } from "rxjs";
import { Task } from "./store/model/todo.state";
import { TodoStore } from "./store/todo.store";
import { TasksManagerService } from "./services/tasksManager.service";
import { LetDirective } from "@ngrx/component";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-list-tasks",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BtnBasicComponent,
    TaskComponent,
    FilterControlTaskComponent,
    LetDirective,
    JsonPipe,
  ],
  templateUrl: "./listTasks.component.html",
  styles: `:host { display: block; }`,
  providers: [TodoStore, TasksManagerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTasksComponent {
  todos$: Observable<Task[]> = this.todoStore.todos$;
  inputTask = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z0-9 ]*$'),
    ],
  });

  constructor(private readonly todoStore: TodoStore) {}

  public addTask() {
    if (this.inputTask.invalid || !this.inputTask.value.trim()) return;

    this.todoStore.addTask(this.inputTask.value.trim());
  }
}
