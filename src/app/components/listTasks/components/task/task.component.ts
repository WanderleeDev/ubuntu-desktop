import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ITask } from '../../../../interfaces/ITask.interface';
import { BtnBasicComponent } from "../../../../shared/btn-basic/btn-basic.component";
import { IBtnBasic } from '../../../../interfaces/IBtnData.interface';
import { TaskEditorComponent } from '../taskEditor/taskEditor.component';
import { EditTaskPanelService } from '../../../../services/editTaskPanel.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styles: `:host {  display: contents;}`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BtnBasicComponent,
        TaskEditorComponent
    ]
})
export class TaskComponent { 
  @Input({required: true}) task?: ITask;
  @Input({required: true}) index?: number;
  private editTaskPanelSvc = inject(EditTaskPanelService);
  isViewControlTask = false;
  isContentEditable = false;
  btnTaskList: IBtnBasic[] = [
    {label: 'programming task', urlSvg: '/assets/clock-icons/clock.svg'},
    {label: 'delete task', urlSvg: '/assets/extra-icons/trash.svg'},
    {label: 'edit task', urlSvg: '/assets/extra-icons/edit.svg'}
  ];

  public removeTask(id: string): void {
    this.editTaskPanelSvc.removeTask(id)
  }

  public editTask(): void {
    this.isContentEditable = !this.isContentEditable    
  }

  public openEditPanelTasks(): void {
    this.editTaskPanelSvc.toggleTaskPanel();
  }

  public toggleControlTask(): void {
    this.isViewControlTask = !this.isViewControlTask;
  }
}
