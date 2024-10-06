import { Task, TodoAction } from "../../interface/task.interface";

export interface TodoState {
  todos: Task[];
  isLoading: boolean;
  currentFilter: TodoAction;
}
