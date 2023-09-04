import '@testing-library/jest-dom';
import {describe, expect, it, vi} from 'vitest';
import {render, fireEvent, screen} from '@testing-library/react';
import Todo from './Todo';

const todo = {
  id: '1',
  text: 'Test Todo',
  isCompleted: false,
};

const onTodoRemove = vi.fn();
const onTodoStatusChange = vi.fn();

describe('Todo component', () => {
  it('renders Todo component', () => {
    render(
      <Todo todo={todo} onTodoRemove={onTodoRemove} onTodoStatusChange={onTodoStatusChange} />
    );
    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
  });

  it('can remove a todo', () => {
    render(
      <Todo todo={todo} onTodoRemove={onTodoRemove} onTodoStatusChange={onTodoStatusChange} />
    );
    fireEvent.click(screen.getByLabelText(/Delete todo/i));
    expect(onTodoRemove).toHaveBeenCalledWith('1');
  });

  it('can change todo status', () => {
    render(
      <Todo todo={todo} onTodoRemove={onTodoRemove} onTodoStatusChange={onTodoStatusChange} />
    );
    fireEvent.click(screen.getByLabelText(/Complete todo/i));
    expect(onTodoStatusChange).toHaveBeenCalledWith('1');
  });
});
