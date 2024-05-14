import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from "@angular/core";
//  Components
import { BtnBasicComponent } from "../../../../shared/ui/btn-basic/btn-basic.component";
import { TaskEditorComponent } from "../taskEditor/taskEditor.component";
//  Interfaces
import { ITask, TaskActionKey } from "../../../../interfaces/ITask.interface";
//  Services
import { TasksManagerService } from "../../../../services/tasksManager.service";
import { TaskEditingButtonsComponent } from "../taskEditingButtons/taskEditingButtons.component";
//  Pipe
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";
import { FormatListPipe } from "../../../../shared/pipes/formatList.pipe";

@Component({
  selector: "app-task",
  standalone: true,
  templateUrl: "./task.component.html",
  styles: `:host {  display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BtnBasicComponent,
    TaskEditorComponent,
    TaskEditingButtonsComponent,
    CapitalizePipe,
    FormatListPipe,
  ],
})
export class TaskComponent implements OnInit {
  private readonly tasksManagerSvc = inject(TasksManagerService);
  @Input({ required: true }) task!: ITask;
  @Input({ required: true }) index?: number;
  fnEditTask!: (editedTask: ITask) => void;
  isViewControlTask = signal(false);
  isContentEditable = signal(false);
  taskEditingLogic = new Map<TaskActionKey, () => void>([
    [
      "change status", () => this.tasksManagerSvc.changeStatusTask(this.task.id),
    ],
    ["delete", () => this.tasksManagerSvc.deleteTask(this.task.id)],
    ["edit", () => this.isContentEditable.update((prevValue) => !prevValue)],
  ]);

  ngOnInit(): void {
    this.fnEditTask = (editedTask: ITask) => {
      this.tasksManagerSvc.editTask.bind(this.tasksManagerSvc)(editedTask);
      this.toggleControlTask();
      // !!this.fnToggleEditPanel && this.fnToggleEditPanel();
    };
  }

  public toggleControlTask(): void {
    this.isViewControlTask.update((prevValue) => !prevValue);
  }
}
