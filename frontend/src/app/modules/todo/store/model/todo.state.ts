import { Task, TodoAction } from "@todo/interface/task.interface";

export interface TodoState {
  todos: Task[];
  isLoading: boolean;
  currentFilter: TodoAction;
}
