import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new task"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px',
    justifyContent: 'center',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: 1,
  },
  button: {
    padding: '8px 16px',
    borderRadius: '5px',
    border: 'none',
    background: '#ffffff',
    color: '#000000',
    cursor: 'pointer',
  },
};

export default AddTodo;
