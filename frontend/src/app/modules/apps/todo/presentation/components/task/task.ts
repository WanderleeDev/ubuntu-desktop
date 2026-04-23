import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";
import { CapitalizePipe } from "../../../../../../shared/pipes/capitalize.pipe";

import { FormatListPipe } from "../../../../../../shared/pipes/formatList.pipe";
import { Task } from "../../../domain/task.interface";
import { ControlsTask } from "../controls-task/controls-task";
import { TaskEditor } from "../task-editor/task-editor";

@Component({
  selector: "app-task",
  standalone: true,
  templateUrl: "./task.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CapitalizePipe,
    FormatListPipe,
    ControlsTask,
    TaskEditor,
  ],
})
export class Task {
  task = input.required<Task>();
  indexTask = input.required<number>();
  taskStatusStream = computed(() => `[${this.task().status}] : `);
  isViewControlTask = signal(false);
  isViewEditorTask = signal(false);

  public toggleControlTask(): void {
    this.isViewControlTask.update(prev => !prev);
  }
}
