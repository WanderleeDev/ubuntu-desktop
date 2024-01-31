import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, signal } from '@angular/core';
import { ITask } from '../../../../interfaces/ITask.interface';
import { BtnBasicComponent } from "../../../../shared/btn-basic/btn-basic.component";
import { TaskEditorComponent } from '../taskEditor/taskEditor.component';
//  Services
import { TasksManagerService } from '../../../../services/tasksManager.service';
import { TaskEditingButtonsComponent } from '../taskEditingButtons/taskEditingButtons.component';
//  Pipe
import { CapitalizePipe } from '../../../../pipes/capitalize.pipe';
import { FormatListPipe } from "../../../../pipes/formatList.pipe";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styles: `:host {  display: contents;}`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BtnBasicComponent,
        TaskEditorComponent,
        TaskEditingButtonsComponent,
        CapitalizePipe,
        FormatListPipe
    ]
})
export class TaskComponent implements OnInit { 
  private readonly tasksManagerSvc = inject(TasksManagerService);
  @Input({required: true}) task!: ITask;
  @Input({required: true}) index?: number;
  fnChangeStatus!: () => void;
  fnDeleteTask!: () => void;
  fnEditTask!: (editedTask: ITask) => void;
  fnToggleEditPanel!: () => void;

  isViewControlTask = signal(false);
  isContentEditable = signal(false);

  ngOnInit(): void {
    this.fnChangeStatus = () => this.tasksManagerSvc.changeStatusTask.bind(this.tasksManagerSvc)(this.task.id)

    this.fnDeleteTask = () => this.tasksManagerSvc.deleteTask.bind(this.tasksManagerSvc)(this.task.id);

    this.fnEditTask = (editedTask: ITask) => {
      this.tasksManagerSvc.editTask.bind(this.tasksManagerSvc)(editedTask);
      this.toggleControlTask()
      !!this.fnToggleEditPanel && this.fnToggleEditPanel();
    };

    this.fnToggleEditPanel = () => this.isContentEditable.update( prevValue => !prevValue);
  }

  public toggleControlTask(): void {
    this.isViewControlTask.update( prevValue => !prevValue);
  }
}
