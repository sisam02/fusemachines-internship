import React from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const { todos, loading, error, add, toggle, remove } = useTodos();

  return (
    <div className="container">
      <h1>TypeScript MERN Todo</h1>
      <TodoForm onAdd={add} />
      <TodoList todos={todos} loading={loading} error={error} onToggle={toggle} onDelete={remove} />
    </div>
  );
};

export default App;
