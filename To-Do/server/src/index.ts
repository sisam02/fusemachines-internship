import dotenv from "dotenv";
dotenv.config();

import { connect } from "mongoose";
import app from "./app";
import config from "./config";

const PORT = config.port || 4000;

async function startServer()
{
    try {
        await connect(config.mongoUri);
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }catch(err) {
        console.error("Failed to start server", err);
        process.exit(1);
    }
}

startServer();