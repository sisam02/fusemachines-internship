import { Request, Response, NextFunction} from "express";
import * as todoService from "../services/todoService";

export const getTodos = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await todoService.getAll();
        res.json(todos);
    }catch(err) {
        next(err);
    }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title } = req.body;
        if (!title || typeof title !== "string") {
            return res.status(400).json({ message: "Title is required"});
        }
        const todo = await todoService.createTodo(title);
        res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
};

export const toggle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const updated = await todoService.toggleTodo(id);
        if (!updated) return res.status(404).json({ message: "Not Found"});
        res.json(updated);
    }catch (err) {
        next(err);
    }
};

export const remove = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const deleted = await todoService.deleteTodo(id);
        if (!deleted) return res.status(404).json({ message: "Not found"});
        res.json({ message: "Deleted"});
    }catch(err){
        next(err);
    }
};