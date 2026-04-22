import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { CapitalizePipe } from "../../../../../../shared/pipes/capitalize.pipe";
import { FormatListPipe } from "../../../../../../shared/pipes/formatList.pipe";
import { Task } from "../../../domain/task.interface";
import { ControlsTaskComponent } from "../controls-task/controls-task.component";
import { TaskEditorComponent } from "../task-editor/task-editor.component";

@Component({
  selector: "app-task",
  standalone: true,
  templateUrl: "./task.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CapitalizePipe,
    FormatListPipe,
    ControlsTaskComponent,
    TaskEditorComponent,
    NgOptimizedImage,
  ],
})
export class TaskComponent {
  task = input.required<Task>();
  indexTask = input.required<number>();
  taskStatusStream = computed(() => `[${this.task().status}] : `);
  isViewControlTask = signal(false);
  isViewEditorTask = signal(false);

  public toggleControlTask(): void {
    this.isViewControlTask.update(prev => !prev);
  }
}
