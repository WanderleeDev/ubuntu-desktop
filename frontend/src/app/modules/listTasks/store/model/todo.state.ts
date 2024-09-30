export interface Task {
  id: string;
  task: string;
  status: StatusTask;
}

export interface TodoState {
  todos: Task[];
}

export enum StatusTask {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type TaskActionKey = "change status" | "delete" | "edit";
export type TaskDto = Partial<Task>;
