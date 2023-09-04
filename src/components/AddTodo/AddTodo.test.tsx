import '@testing-library/jest-dom';
import {describe, expect, it, vi} from 'vitest';
import {render, fireEvent, screen} from '@testing-library/react';
import AddTodo from './AddTodo';

const onTodoAdd = vi.fn();

describe('Todo component', () => {
  it('renders AddTodo component', () => {
    render(<AddTodo onTodoAdd={onTodoAdd} />);
    const inputElement = screen.getByPlaceholderText(/Add Todo/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('can add a todo', () => {
    render(<AddTodo onTodoAdd={onTodoAdd} />);
    const inputElement = screen.getByPlaceholderText(/Add Todo/i);
    fireEvent.change(inputElement, {target: {value: 'Test Todo'}});
    fireEvent.submit(inputElement);
    expect(onTodoAdd).toHaveBeenCalledWith('Test Todo');
  });
});
