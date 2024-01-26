export interface ITask {
  id: string;
  status: StatusTask;
  task: string;
  isCompleted: boolean;
}

export interface ITaskDto extends Pick<ITask, 'status' | 'task'> { }

export type StatusTask = 'clear'| 'in process' | 'pending' | 'removed';
