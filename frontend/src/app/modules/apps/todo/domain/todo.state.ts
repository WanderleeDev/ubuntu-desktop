import { Task, TodoAction } from "./task.interface";

export interface TodoState {
  todos: Task[];
  isLoading: boolean;
  currentFilter: TodoAction;
}
