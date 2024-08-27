import React from "react";

function TodoItem({ todo, toggleTodo }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={toggleTodo}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
