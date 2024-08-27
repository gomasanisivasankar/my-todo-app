import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear the input field after adding
    }
  };

  const handleRemoveTodo = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddTodo} style={styles.addButton}>
        Add Todo
      </button>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            <span>{todo}</span>
            <button
              onClick={() => handleRemoveTodo(index)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  input: {
    padding: "10px",
    width: "200px",
    marginRight: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
    width: "300px",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    margin: "5px 0",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TodoList;
