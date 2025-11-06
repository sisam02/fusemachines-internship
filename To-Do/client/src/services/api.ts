import axios from "axios";
import type { Todo } from "../types/todo";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchTodos =() => api.get<Todo[]>("/todos");
export const createTodo = (title: string) => api.post("/todos", { title });
export const toggleTodo = (id:string) => api.patch(`/todos/${id}/toggle`);
export const deleteTodo = (id:string) => api.delete(`/todos/${id}`);

export default api;
