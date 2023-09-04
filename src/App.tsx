import {IFilter, ITodo} from './types';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './App.module.css';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList/TodoList';
import Button from './components/Button/Button';

function App() {
  const [todos, setTodos] = useLocalStorage<ITodo[]>('todos', []);
  const [filter, setFilter] = useState<IFilter>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.isCompleted === true;
    if (filter === 'uncompleted') return todo.isCompleted === false;
  });

  const addTodo = (text: string) => {
    setTodos([...todos, {id: uuidv4(), text, isCompleted: false}]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeCompletedTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true));
  };

  const toggleTodoStatus = (id: string) => {
    const currentIndex = todos.findIndex((todo) => todo.id === id);

    if (currentIndex !== -1) {
      setTodos([
        ...todos.slice(0, currentIndex),
        ...todos.slice(currentIndex + 1),
        {...todos[currentIndex], isCompleted: !todos[currentIndex].isCompleted},
      ]);
    }
  };

  const changeFilter = (filter: IFilter) => {
    setFilter(filter);
  };

  return (
    <div className='container'>
      <Header />
      <main className={styles.main}>
        <AddTodo onTodoAdd={addTodo} />
        <div className={styles.controls}>
          <Filter filter={filter} onFilterChange={changeFilter} />
          <Button onClick={removeCompletedTodos}>Clear completed</Button>
        </div>
        <TodoList
          todos={filteredTodos}
          onTodoRemove={removeTodo}
          onTodoStatusChange={toggleTodoStatus}
        />
      </main>
    </div>
  );
}

export default App;
