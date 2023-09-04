export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type IFilter = 'all' | 'completed' | 'uncompleted';
