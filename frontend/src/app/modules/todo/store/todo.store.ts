import { Injectable } from "@angular/core";
import { ComponentStore, OnStateInit } from "@ngrx/component-store";
import { TodoState } from "./model/todo.state";
import { TasksManagerService } from "../services/tasks-manager.service";
import { StatusTask, Task, TaskDto } from "../interface/task.interface";
import { catchError, EMPTY, exhaustMap, Observable, tap } from "rxjs";

@Injectable()
export class TodoStore
  extends ComponentStore<TodoState>
  implements OnStateInit
{
  readonly todos$ = this.select(state => state.todos);
  readonly isLoading$ = this.select(state => state.isLoading);
  readonly todosCompleted$ = this.filterTasks(StatusTask.COMPLETED);
  readonly todosPending$ = this.filterTasks(StatusTask.PENDING);

  constructor(private readonly taskManagerSvc: TasksManagerService) {
    super({ todos: [], isLoading: true });
  }

  ngrxOnStateInit(): void {
    this.loadTodos();
  }

  readonly addTask = this.updater((state, task: string): TodoState => {
    return {
      ...state,
      todos: this.taskManagerSvc.addTask(state.todos, task),
    };
  });

  readonly deleteTask = this.updater(
    (state, id: string): TodoState => ({
      ...state,
      todos: this.taskManagerSvc.deleteTask(state.todos, id),
    })
  );

  readonly updateTask = this.updater(
    (state, task: TaskDto): TodoState => ({
      ...state,
      todos: this.taskManagerSvc.updateTask(state.todos, task),
    })
  );

  readonly changeStatusTask = this.updater(
    (state, id: string): TodoState => ({
      ...state,
      todos: this.taskManagerSvc.changeStatusTask(state.todos, id),
    })
  );

  public clearTasks(): void {
    this.patchState({
      todos: this.taskManagerSvc.setTodos([]),
    });
  }

  private filterTasks(status: StatusTask): Observable<Task[]> {
    return this.select(state =>
      state.todos.filter(todo => todo.status === status)
    );
  }

  private loadTodos = this.effect(trigger$ =>
    trigger$.pipe(
      exhaustMap(() =>
        this.taskManagerSvc.initializeTodo().pipe(
          tap(todos => this.setState({ todos, isLoading: false })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
