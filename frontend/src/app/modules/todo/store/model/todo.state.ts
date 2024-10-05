import { Task } from "../../interface/task.interface";

export interface TodoState {
  todos: Task[];
  isLoading: boolean;
}
