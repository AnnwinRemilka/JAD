import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, text]);
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.heading}>To-do List </h1>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onRemove={removeTodo} />
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: 'url("https://toppng.com/uploads/preview/cool-backgrounds-hd-11553723106ceelmiacll.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgb(132, 179, 184)',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.8)',
    minWidth: '350px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#000000',
  },
};

export default App;
