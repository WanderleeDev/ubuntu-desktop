import { Injectable, Signal, computed, inject, signal } from "@angular/core";
//  Services
import { GenerateRandomId } from "./generateRandomId.service";
import { LocalStorageService } from "./localStorage.service";
//  Interfaces
import { ITask } from "../interfaces/ITask.interface";

@Injectable({
  providedIn: "root",
})
export class TasksManagerService {
  private readonly localStorageSvc = inject(LocalStorageService);
  private readonly keyStorage = "task";
  private randomIdSvc = inject(GenerateRandomId);
  private listTasks = signal<ITask[]>([]);
  private tasksStream = computed(() => {
    this.localStorageSvc.setInLocalStorage<ITask[]>(
      this.listTasks(),
      this.keyStorage
    );
    return this.listTasks();
  });

  constructor() {
    const backUp = this.localStorageSvc.getLocalStorage<ITask[]>(this.keyStorage) ?? [];
    this.listTasks.set(backUp);
  }
  
  public getComputedTasks(): Signal<ITask[]> {
    return this.tasksStream;
  }

  public addTask(task: string): void {
    const newTask: ITask = {
      task: task,
      id: this.randomIdSvc.generateRandomId(),
      isCompleted: false,
    };
    this.listTasks.update((tasks) => [...tasks, { ...newTask }]);
  }

  public deleteTask(id: string):void {
    this.listTasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }

  public editTask(task: ITask): void {
    this.listTasks.update((tasks) =>
      tasks.map((t) => task.id === t.id ? task : { ...t })
    );
  }

  public changeStatusTask(id: string): void {
    this.listTasks.update((tasks) => 
      tasks.map((t) =>t.id !== id ? { ...t } : { ...t, isCompleted: !t.isCompleted })
    );
  }

  public clearTasks(): void {
    this.listTasks.update((tasks) => tasks.filter((t) => !t.isCompleted));
  }
}
