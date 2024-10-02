import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { TodoState } from "./model/todo.state";
import { TasksManagerService } from "../services/tasks-manager.service";
import { StatusTask, TaskDto } from "../interface/task.interface";

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  readonly todos$ = this.select((state) => state.todos);
  readonly todosCompleted$ = this.filterTasks(StatusTask.COMPLETED);
  readonly todosPending$ = this.filterTasks(StatusTask.PENDING);

  constructor(private readonly taskManagerSvc: TasksManagerService) {
    //  TODO trae los datos de la DB y lo guarda en localStorage e inicializa el store
    super({ todos: [] });
  }

  readonly addTask = this.updater((state, task: string) => ({
    todos: this.taskManagerSvc.addTask(state.todos, task),
  }));

  readonly deleteTask = this.updater((state, id: string) => ({
    todos: this.taskManagerSvc.deleteTask(state.todos, id),
  })); 
  
  readonly updateTask = this.updater((state, task: TaskDto) => ({
    todos: this.taskManagerSvc.updateTask(state.todos, task),
  }));

  readonly changeStatusTask = this.updater((state, id: string) => ({
    todos: this.taskManagerSvc.changeStatusTask(state.todos, id),
  }));

  readonly clearTasks = this.patchState({
    todos: this.taskManagerSvc.setTodos([]),
  });

  private filterTasks(status: StatusTask) {
    return this.select((state) =>
      state.todos.filter((todo) => todo.status === status)
    );
  }
}