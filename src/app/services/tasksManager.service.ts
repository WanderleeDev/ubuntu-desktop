import { Injectable, computed, inject, signal } from '@angular/core';
//  Services
import { GenerateRandomId } from './generateRandomId.service';
//  Interfaces
import { ITask, ITaskDto } from '../interfaces/ITask.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksManagerService {
  private randomIdSvc = inject(GenerateRandomId)
  private listTasks = signal<ITask[]>([]);
  tasksStream = computed(() => this.listTasks());

  public addTask(task: ITaskDto) {
    const newTask: ITask = {
      task: task.task,
      id: this.randomIdSvc.generateRandomId(),
      isCompleted: false,
      status: task.status
    };
    this.listTasks.update(tasks => [...tasks, {...newTask}]);
  }

  public removeTask(id: string) {
    this.listTasks.update(tasks => tasks.filter(t => t.id !== id))
  }
  
  public getComputedTasks () {
    return this.tasksStream
  }

  public editTask(task: ITask) {
    this.listTasks.update(tasks => tasks.map(t => {
      return task.id === t.id ? task : {...t};
    }))
  }

  public completeTask(id: string) {
    this.listTasks.update(tasks => tasks.filter(t => {
      return id === t.id ? {...t, isCompleted: !t.isCompleted} : {...t}
    }))
  }

  public clearTasks() {
    this.listTasks.update(tasks => tasks.filter(t => !t.isCompleted))
  }
}
