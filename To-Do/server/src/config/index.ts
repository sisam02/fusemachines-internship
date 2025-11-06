import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT ? Number(process.env.PORT) : 4000,
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/todo",

};

export default config;