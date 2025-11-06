import React from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, loading, error, onToggle, onDelete }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (todos.length === 0) return <div>No todos — add one!</div>;

  return (
    <ul>
      {todos.map((t) => (
        <TodoItem key={t._id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
