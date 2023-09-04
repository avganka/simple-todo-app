import {ITodo} from '../../types';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: ITodo[];
  onTodoRemove: (id: string) => void;
  onTodoStatusChange: (id: string) => void;
}

function TodoList({todos, onTodoRemove, onTodoStatusChange}: TodoListProps) {
  return (
    <ul className={styles.list}>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTodoRemove={onTodoRemove}
            onTodoStatusChange={onTodoStatusChange}
          />
        ))
      ) : (
        <div className={styles.emptyList}>List is empty....</div>
      )}
    </ul>
  );
}

export default TodoList;
