import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { toast } from "ngx-sonner";
import { TodoStore } from "../../../infrastructure/todo.store";
import { TaskMessages } from "../../../domain/TaskMessages.enum";

@Component({
  selector: "app-task-input-field",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./task-input-field.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskInputFieldComponent {
  private readonly todoStore = inject(TodoStore);

  inputTask = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern("^[a-zA-Z0-9\\s]*$"),
    ],
  });

  public addTask(): void {
    if (this.inputTask.invalid || !this.inputTask.value.trim()) {
      toast.error(TaskMessages.ERROR);
      return;
    }

    this.todoStore.addTask(this.inputTask.value.trim());
    toast.success(TaskMessages.ADD_TASK);
    this.inputTask.reset();
  }
}

