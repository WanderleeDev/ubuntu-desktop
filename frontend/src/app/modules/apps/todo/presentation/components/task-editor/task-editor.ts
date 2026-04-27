import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
  OnInit,
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  TaskEditor as ITaskEditor,
  Task as ITask,
} from "../../../domain/task.interface";
import { TodoStore } from "../../../infrastructure/todo.store";

@Component({
  selector: "app-task-editor",
  imports: [ReactiveFormsModule],
  templateUrl: "./task-editor.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditor implements OnInit {
  private readonly todoStore = inject(TodoStore);
  private readonly fb = inject(FormBuilder);

  currentTask = input.required<ITask>();
  isViewEditorTask = model(false);
  formEditor!: FormGroup<ITaskEditor>;

  ngOnInit(): void {
    this.formEditor = this.fb.nonNullable.group({
      task: [
        this.currentTask().task,
        [Validators.required, Validators.minLength(3)],
      ],
      status: [this.currentTask().status, Validators.required],
    });
  }

  public editTask(): void {
    if (this.formEditor.invalid) return;

    const { status, task } = this.formEditor.value;
    const hasChanges =
      status !== this.currentTask().status || task !== this.currentTask().task;

    if (hasChanges) {
      this.todoStore.updateTask({
        id: this.currentTask().id,
        task,
        status,
      });
    }

    this.isViewEditorTask.set(false);
  }

  public close(): void {
    this.isViewEditorTask.set(false);
  }
}
