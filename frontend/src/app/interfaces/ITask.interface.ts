export interface ITask {
  id: string;
  task: string;
  isCompleted: boolean;
}

export type StatusTask = 'completed' | 'pending' ;

export type TaskActionKey = "change status" | "delete" | "edit";
