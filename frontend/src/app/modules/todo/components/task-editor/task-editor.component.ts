import {
  ChangeDetectionStrategy,
  Component,
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
import { TaskEditor, StatusTask, Task } from "../../interface/task.interface";
import { TodoStore } from "../../store/todo.store";

@Component({
  selector: "app-task-editor",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./task-editor.component.html",
  styleUrl: "./task-editor.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditorComponent implements OnInit {
  currentTask = input.required<Task>();
  isViewEditorTask = model(false);
  formEditor: FormGroup<TaskEditor>;

  constructor(
    private readonly todoStore: TodoStore,
    private readonly fb: FormBuilder
  ) {
    this.formEditor = this.fb.nonNullable.group({
      task: ["", [Validators.required, Validators.minLength(3)]],
      status: [StatusTask.PENDING, Validators.required],
    });
  }

  ngOnInit() {
    this.formEditor.setValue({
      task: this.currentTask().task,
      status: this.currentTask().status,
    });
  }

  public editTask(): void {
    if (this.formEditor.invalid) return;
    console.log(this.formEditor.value);

    const { status, task } = this.formEditor.value;

    this.todoStore.updateTask({
      id: this.currentTask().id,
      task,
      status,
    });

    this.isViewEditorTask.set(true);
  }
}
