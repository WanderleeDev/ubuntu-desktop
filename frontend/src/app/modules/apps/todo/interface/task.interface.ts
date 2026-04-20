import { FormControl } from "@angular/forms";

export interface Task {
  [key: string]: string;
  id: string;
  task: string;
  status: StatusTask;
}

export interface TaskEditor {
  task: FormControl<string>;
  status: FormControl<StatusTask>;
}

export interface TodoControl {
  task: string;
  action: TodoAction;
}

export enum StatusTask {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type TodoAction = "pending" | "completed" | "all";
export type TaskDto = Partial<Task>;
