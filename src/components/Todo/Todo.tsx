import {ITodo} from '../../types';
import styles from './Todo.module.css';

interface TodoProps {
  todo: ITodo;
  onTodoRemove: (id: string) => void;
  onTodoStatusChange: (id: string) => void;
}

function Todo({todo, onTodoRemove, onTodoStatusChange}: TodoProps) {
  return (
    <li key={todo.id}>
      <button onClick={() => onTodoStatusChange(todo.id)}>{todo.isCompleted ? 'V' : '0'}</button>
      {todo.text}
      <button onClick={() => onTodoRemove(todo.id)}>X</button>
    </li>
  );
}

export default Todo;
