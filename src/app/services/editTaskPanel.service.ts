import { Injectable, Signal, computed, signal } from '@angular/core';
//  Services
import { TasksManagerService } from './tasksManager.service';
//  Interfaces
import { ITask } from '../interfaces/ITask.interface';

@Injectable({
  providedIn: 'root'
})
export class EditTaskPanelService extends TasksManagerService {
  private isViewEditTaskPanel = signal<boolean>(false);
  private isViewTaskPanelStream = computed(() => this.isViewEditTaskPanel());

  public getTaskPanelComputed(): Signal<boolean> {
    return this.isViewTaskPanelStream;
  }

  public toggleTaskPanel(): void {
    this.isViewEditTaskPanel.update(isView => !isView);
  }

  public editTasksAndCloseEditPanel(task: ITask) {
    this.editTask(task);
    this.toggleTaskPanel()
  }
}
