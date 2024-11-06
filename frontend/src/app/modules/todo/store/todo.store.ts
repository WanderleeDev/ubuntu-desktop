import { Injectable } from "@angular/core";
import { ComponentStore, OnStateInit } from "@ngrx/component-store";
import { TodoState } from "./model/todo.state";
import { TasksManagerService } from "../services/tasks-manager.service";
import { TaskDto, TodoAction } from "../interface/task.interface";
import { EMPTY, exhaustMap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

@Injectable()
export class TodoStore
  extends ComponentStore<TodoState>
  implements OnStateInit
{
  readonly todos$ = this.select(state => state.todos);
  readonly isLoading$ = this.select(state => state.isLoading);
  readonly currentFilter$ = this.select(state => state.currentFilter);

  constructor(private readonly taskManagerSvc: TasksManagerService) {
    super({ todos: [], isLoading: true, currentFilter: "all" });
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

  public changeFilter(filter: TodoAction): void {
    this.patchState({ currentFilter: filter });
  }

  public clearTasks(): void {
    this.patchState({
      todos: this.taskManagerSvc.setTodos([]),
      currentFilter: "all",
    });
  }

  private loadTodos = this.effect(trigger$ =>
    trigger$.pipe(
      exhaustMap(() =>
        this.taskManagerSvc.initializeTodo().pipe(
          tapResponse({
            next: todos => this.patchState({ todos }),
            error: () => EMPTY,
            finalize: () => this.patchState({ isLoading: false }),
          })
        )
      )
    )
  );
}
