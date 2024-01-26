import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnDestroy, inject } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
// Services

@Component({
  selector: "app-task-editor",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: "./taskEditor.component.html",
  styles: `:host { display: contents}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditorComponent {
  @Input({required: true}) idTask?: string;
  private fb = inject(FormBuilder);

  formEditor = this.fb.nonNullable.group({
    task: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    status: ["", Validators.required],
  });

  statusOptions: string[] = ["Pending", "In progress", "Completed"];

  public editTask(): void {
    console.log(this.formEditor.getRawValue());
    // this.taskManagerSvc.editTask(this.formEditor.getRawValue());
  }
}
