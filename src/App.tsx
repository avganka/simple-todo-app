import {IFilter, ITodo} from './types';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import Filter from './components/Filter/Filter';
import Todo from './components/Todo/Todo';

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

  const toggleTodoStatus = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    );
    setTodos(newTodos);
  };

  const changeFilter = (filter: IFilter) => {
    setFilter(filter);
  };

  return (
    <div className='container'>
      <Header />
      <main>
        <AddTodo onTodoAdd={addTodo} />
        <Filter onFilterChange={changeFilter} />
        <ul>
          {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onTodoRemove={removeTodo}
              onTodoStatusChange={toggleTodoStatus}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
