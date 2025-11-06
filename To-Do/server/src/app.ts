import express from "express";
import cors from "cors";
import todosRouter from "./routes/todos";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRouter);
app.use(errorHandler);

export default app;