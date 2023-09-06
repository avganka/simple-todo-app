import {AnimatePresence} from 'framer-motion';
import {ITodo} from '../../types';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: ITodo[];
  onTodoRemove: (id: string) => void;
  onTodoStatusChange: (id: string) => void;
}

function TodoList({todos, onTodoRemove, onTodoStatusChange}: TodoListProps) {
  if (todos.length === 0) {
    return <div className={styles.emptyList}>List is empty....</div>;
  }

  return (
    <ul className={styles.list}>
      <AnimatePresence>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTodoRemove={onTodoRemove}
            onTodoStatusChange={onTodoStatusChange}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default TodoList;
