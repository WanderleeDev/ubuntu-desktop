import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  signal,
} from "@angular/core";
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";
import { FormatListPipe } from "../../../../shared/pipes/formatList.pipe";
import { Task } from "../../interface/task.interface";
import { ControlsTaskComponent } from "../controls-task/controls-task.component";
import { NgStyle } from "@angular/common";
import { TaskEditorComponent } from "../task-editor/task-editor.component";

@Component({
  selector: "app-task",
  standalone: true,
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BtnBasicComponent,
    CapitalizePipe,
    FormatListPipe,
    ControlsTaskComponent,
    TaskEditorComponent,
    NgStyle
  ],
})
export class TaskComponent {
  task = input.required<Task>();
  indexTask = input.required<number>();
  taskStatusStream = computed(() => `[${this.task().status}] : `);
  isViewControlTask = signal(false);
  isViewEditorTask = signal(false);


  public toggleControlTask(): void {
    this.isViewControlTask.update((prevValue) => !prevValue);
  }
}
