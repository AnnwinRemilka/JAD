import React from 'react';

const TodoItem = ({ todo, onRemove }) => (
  <div style={styles.item}>
    <span>{todo}</span>
    <button style={styles.button} onClick={onRemove}>Remove</button>
  </div>
);

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
    padding: '10px 15px',
    margin: '8px 0',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  button: {
    background: '#ff5252',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default TodoItem;
