import {FormEvent, useState} from 'react';
import styles from './AddTodo.module.css';
import spriteUrl from '../../assets/svg-sprite.svg?url';
import Button from '../Button/Button';

interface AddTodoProps {
  onTodoAdd: (text: string) => void;
}

function AddTodo({onTodoAdd}: AddTodoProps) {
  const [text, setText] = useState('');

  const addTodoHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onTodoAdd(text);
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={(evt) => addTodoHandler(evt)}>
      <input
        placeholder='Add Todo'
        className={styles.input}
        type='text'
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <Button className={styles.button} aria-label='Add Todo'>
        <svg width={15} height={15} className={styles.buttonIcon}>
          <use xlinkHref={`${spriteUrl}#cross`}></use>
        </svg>
      </Button>
    </form>
  );
}

export default AddTodo;
