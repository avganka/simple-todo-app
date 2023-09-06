import {ITodo} from '../../types';
import styles from './Todo.module.css';
import spriteUrl from '../../assets/svg-sprite.svg?url';
import cn from 'classnames';
import Button from '../Button/Button';
import {motion} from 'framer-motion';
interface TodoProps {
  todo: ITodo;
  onTodoRemove: (id: string) => void;
  onTodoStatusChange: (id: string) => void;
}

function Todo({todo, onTodoRemove, onTodoStatusChange}: TodoProps) {
  return (
    <motion.li
      initial={{scale: 0.5, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      exit={{scale: 0.5, opacity: 0}}
      className={cn(styles.todo, {
        [styles.checked]: todo.isCompleted,
      })}
    >
      <Button
        variant={todo.isCompleted ? 'success' : 'solid'}
        className={styles.statusButton}
        onClick={() => onTodoStatusChange(todo.id)}
        aria-label={todo.isCompleted ? 'Uncomlete todo' : 'Complete todo'}
      >
        {todo.isCompleted ? (
          <svg width={15} height={15} className={styles.buttonIcon}>
            <use xlinkHref={`${spriteUrl}#check`}></use>
          </svg>
        ) : null}
      </Button>
      {todo.text}
      <Button
        className={styles.removeButton}
        onClick={() => onTodoRemove(todo.id)}
        aria-label='Delete todo'
      >
        <svg width={15} height={15} className={styles.buttonIcon}>
          <use xlinkHref={`${spriteUrl}#cross`}></use>
        </svg>
      </Button>
    </motion.li>
  );
}

export default Todo;
