import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
//  Interfaces
import { IFormEditor } from "../../../../interfaces/IFormEditor.interface";
import { Task } from "../../store/model/todo.state";



@Component({
  selector: "app-task-editor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./taskEditor.component.html",
  styles: `:host { display: contents}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditorComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) fnEditTask!: (editedTask: Task) => void;
  formEditor!: FormGroup<IFormEditor>;

  ngOnInit(): void {
    this.formEditor = this.fb.nonNullable.group({
      task: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      status: ["", Validators.required],
    });

    this.formEditor.setValue({
      task: this.task.task,
      status: this.task.status,
    });
  }

  public editTask(): void {
    const { status, task } = this.formEditor.getRawValue();
    this.fnEditTask({
      ...this.task,
      task,
    });
  }
}
