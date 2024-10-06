import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { toast } from "ngx-sonner";
import { TodoStore } from "../../store/todo.store";
import { environment } from "../../../../../environments/environment.development";

@Component({
  selector: "app-task-input-field",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./task-input-field.component.html",
  styleUrl: "./task-input-field.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskInputFieldComponent {
  inputTask = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(environment.MINLENGTH_INPUT),
      Validators.pattern(environment.PATTERN_INPUT),
    ],
  });

  constructor(private readonly todoStore: TodoStore) {}

  public addTask(): void {
    if (this.inputTask.invalid || !this.inputTask.value.trim()) {
      toast.error("Minimum 5 letters and no special characters");

      return;
    }

    this.todoStore.addTask(this.inputTask.value.trim());
    toast.success("Task added  ✅");
    this.inputTask.reset();
  }
}
