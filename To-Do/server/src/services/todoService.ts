import Todo, { ITodo} from "../models/Todo";

export const getAll = async (): Promise<ITodo[]> => {
    return Todo.find().sort({createdAt: -1}).exec();
};

export const createTodo = async (title:string): Promise<ITodo> => {
    const todo = new Todo({title});
    return todo.save();
};

export const toggleTodo = async (id:string): Promise<ITodo | null> => {
    const todo = await Todo.findById(id);
    if (!todo) return null;
    todo.completed = !todo.completed;
    return todo.save();
};

export const deleteTodo = async (id : string): Promise<ITodo | null> => {
    return Todo.findByIdAndDelete(id).exec();
};