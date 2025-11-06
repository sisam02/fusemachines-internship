import React from "react";
import type{Todo} from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
        />
        {todo.title}
      </label>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
