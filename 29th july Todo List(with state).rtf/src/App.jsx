import React, { useState } from 'react';

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return; // avoid empty items
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  };

  return (
    <div style={styles.container}>
      <h1>Simple To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a to-do item"
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.button}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {todoList.map((item, index) => (
          <li key={index} style={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: '400px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '70%',
  },
  button: {
    padding: '10px 20px',
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    textAlign: 'left',
  },
  listItem: {
    fontSize: '18px',
    marginBottom: '8px',
  },
};

export default TodoApp;
