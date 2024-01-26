import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//  Services
import { TasksManagerService } from '../../services/tasksManager.service';
import { GenerateRandomId } from '../../services/generateRandomId.service';
//  Interface
import { ITask } from '../../interfaces/ITask.interface';
import { BtnBasicComponent } from '../../shared/btn-basic/btn-basic.component';
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
  private tasksManagerSvc = inject(TasksManagerService);
  private idGeneratorSvc = inject(GenerateRandomId)

  listTasks = this.tasksManagerSvc.tasksStream;
  inputTask = new FormControl('', {
    nonNullable: true, 
    validators: [Validators.required]
  });

  public addTask(e: KeyboardEvent): void {
    if (e.key !== 'Enter' ) return
    const newTask: ITask = {
      task: this.inputTask.getRawValue(),
      id: this.idGeneratorSvc.generateRandomId(),
      isCompleted: false,
      status: 'pending'
    };  

    this.tasksManagerSvc.addTask(newTask);
    this.inputTask.reset()
  }
}
