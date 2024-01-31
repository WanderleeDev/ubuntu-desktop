export interface ITask {
  id: string;
  task: string;
  isCompleted: boolean;
}

// export interface ITaskDto extends Pick<ITask, 'status' | 'isCompleted'> { }

export type StatusTask = 'completed' | 'pending' ;
