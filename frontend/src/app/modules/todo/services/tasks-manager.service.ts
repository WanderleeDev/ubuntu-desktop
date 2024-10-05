import { Injectable } from "@angular/core";
//  Services
import { GenerateRandomId } from "../../../services/generateRandomId.service";
import { LocalStorageService } from "../../../services/localStorage.service";
//  Interfaces
import { Task, StatusTask, TaskDto } from "../interface/task.interface";
import { environment } from "../../../../environments/environment.development";
import { TodoApiService } from "./todo-api.service";
import { errorToastHandler } from "../../../utils/errorToastHandler";
import { catchError, map, Observable, of } from "rxjs";

@Injectable()
export class TasksManagerService {
  private readonly keyStorage = environment.KEY_TASKS_STORAGE;

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly randomIdService: GenerateRandomId,
    private readonly apiTodoSvc: TodoApiService
  ) {}

  public addTask(todos: Task[], task: string): Task[] {
    if (!task.trim()) return todos;

    const newTask: Task = {
      id: this.randomIdService.generateRandomId(),
      task,
      status: StatusTask.PENDING,
    };

    return this.saveTasks([...todos, newTask]);
  }

  public deleteTask(todos: Task[], id: string): Task[] {
    const tasksUpdated = todos.filter(task => task.id !== id);

    return this.saveTasks(tasksUpdated);
  }

  public changeStatusTask(todos: Task[], id: string): Task[] {
    const changeStatus = (status: StatusTask): StatusTask =>
      status === StatusTask.PENDING ? StatusTask.COMPLETED : StatusTask.PENDING;
    const tasksUpdated: Task[] = todos.map(task =>
      task.id !== id ? task : { ...task, status: changeStatus(task.status) }
    );

    return this.saveTasks(tasksUpdated);
  }

  public updateTask(todos: Task[], task: TaskDto): Task[] {
    if (!task.id) return todos;

    const tasksUpdated: Task[] = todos.map(currentTask =>
      currentTask.id === task.id ? { ...currentTask, ...task } : currentTask
    );

    return this.saveTasks(tasksUpdated);
  }

  public setTodos(todos: Task[]): Task[] {
    return this.saveTasks(todos);
  }

  private saveTasks(todos: Task[]): Task[] {
    // TODO guarda en la DB

    return this.localStorageService.setInLocalStorage<Task[]>(
      todos,
      this.keyStorage
    );
  }

  public initializeTodo(): Observable<Task[]> {
    return this.apiTodoSvc.getTasks().pipe(
      map(tasks => this.setTodos(tasks)),
      catchError(e => {
        errorToastHandler(e);

        const backup = this.localStorageService.getLocalStorage<Task[]>(
          this.keyStorage
        );

        return of(this.setTodos(backup ?? []));
      })
    );
  }
}
