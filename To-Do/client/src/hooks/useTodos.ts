import { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import * as api from "../services/api";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = async () => {
        setLoading(true);
        try {
            const res = await api.fetchTodos();
            setTodos(res.data);
            setError(null);
        }catch(err:any) {
            setError(err?.response?.data?.message ||err.message || "Failed to load");
        }finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        load();
    }, []);

    const add = async (title:string) => {
        const res = await api.createTodo(title);
        setTodos(prev => [res.data, ...prev]);
    };

    const toggle = async (id:string) => {
        const res = await api.toggleTodo(id);
        setTodos(prev => prev.map(t => (t._id === id? res.data: t)));
    };

    const remove = async (id: string) => {
        await api.deleteTodo(id);
        setTodos(prev => prev.filter(t => t._id !== id));
    };

    return { todos, loading, error, add, toggle, remove, reload: load };
}
