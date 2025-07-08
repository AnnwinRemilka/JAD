import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onRemove={() => onRemove(index)} />
      ))}
    </div>
  );
};

export default TodoList;