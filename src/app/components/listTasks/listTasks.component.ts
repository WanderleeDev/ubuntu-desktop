import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//  Services
import { TasksManagerService } from '../../services/tasksManager.service';
//  Interface
import { BtnBasicComponent } from '../../shared/ui/btn-basic/btn-basic.component';
import { TaskComponent } from './components/task/task.component';
import { FilterControlTaskComponent } from './components/filterControlTask/filterControlTask.component';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnBasicComponent,
    TaskComponent,
    FilterControlTaskComponent
  ],
  templateUrl: './listTasks.component.html',
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListTasksComponent { 
  private readonly tasksManagerSvc = inject(TasksManagerService);
  listTasks = this.tasksManagerSvc.getComputedTasks();
  inputTask = new FormControl('', {
    nonNullable: true, 
    validators: [Validators.required]
  });

  public addTask(e: KeyboardEvent): void {
    if (e.key !== 'Enter' ) return
    this.tasksManagerSvc.addTask(this.inputTask.getRawValue());
    this.inputTask.reset()
  }
}
