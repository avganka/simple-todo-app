import {FormEvent, useState} from 'react';
import styles from './AddTodo.module.css';

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
    <form onSubmit={(evt) => addTodoHandler(evt)}>
      <input type='text' value={text} onChange={(evt) => setText(evt.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
