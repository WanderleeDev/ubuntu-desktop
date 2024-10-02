import { FormControl } from "@angular/forms";

export interface Task {
  id: string;
  task: string;
  status: StatusTask;
}

export interface TaskEditor {
  task: FormControl<string>;
  status: FormControl<StatusTask>;
}

export interface TodoBtnControl {
  action: TodoAction;
  fnAction: () => void;
}

export enum StatusTask {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type TaskActionKey = "change status" | "delete" | "edit";
export type TodoAction = "pending" | "completed" | "clear";
export type TaskDto = Partial<Task>;
