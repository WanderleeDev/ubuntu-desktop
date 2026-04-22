import { inject } from "@angular/core";
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from "@ngrx/signals";
import {
  Task,
  StatusTask,
  TaskDto,
  TodoAction,
} from "../domain/task.interface";
import { StorageService } from "../../../../shared/services/storage.service";
import { GenerateRandomId } from "../../../../shared/services/generateRandomId.service";

export interface TodoState {
  todos: Task[];
  isLoading: boolean;
  currentFilter: TodoAction;
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  currentFilter: "all",
};

const TODO_STORAGE_KEY = "tasks";

export const TodoStore = signalStore(
  withState(initialState),
  withMethods(
    (
      store,
      storage = inject(StorageService),
      randomId = inject(GenerateRandomId)
    ) => ({
      loadTodos() {
        const todos = storage.getItem<Task[]>(TODO_STORAGE_KEY) || [];
        patchState(store, { todos, isLoading: false });
      },
      addTask(task: string) {
        if (!task.trim()) return;
        const newTask: Task = {
          id: randomId.generateRandomId(),
          task,
          status: StatusTask.PENDING,
        };
        const updatedTodos = [...store.todos(), newTask];
        patchState(store, { todos: updatedTodos });
        storage.setItem(TODO_STORAGE_KEY, updatedTodos);
      },
      deleteTask(id: string) {
        const updatedTodos = store.todos().filter(t => t.id !== id);
        patchState(store, { todos: updatedTodos });
        storage.setItem(TODO_STORAGE_KEY, updatedTodos);
      },
      updateTask(taskDto: TaskDto) {
        const updatedTodos = store
          .todos()
          .map(t => (t.id === taskDto.id ? { ...t, ...(taskDto as any) } : t));
        patchState(store, { todos: updatedTodos });
        storage.setItem(TODO_STORAGE_KEY, updatedTodos);
      },
      changeStatusTask(id: string) {
        const updatedTodos = store.todos().map(t =>
          t.id === id
            ? {
                ...t,
                status:
                  t.status === StatusTask.PENDING
                    ? StatusTask.COMPLETED
                    : StatusTask.PENDING,
              }
            : t
        );
        patchState(store, { todos: updatedTodos });
        storage.setItem(TODO_STORAGE_KEY, updatedTodos);
      },
      changeFilter(currentFilter: TodoAction) {
        patchState(store, { currentFilter });
      },
      clearTasks() {
        patchState(store, { todos: [] });
        storage.removeItem(TODO_STORAGE_KEY);
      },
    })
  ),
  withHooks({
    onInit(store) {
      store.loadTodos();
    },
  })
);
