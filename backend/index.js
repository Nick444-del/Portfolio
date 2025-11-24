import express from "express";
import { config } from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./configs/connection.js";
import skillCategoryRouter from "./routers/skillCategory.router.js";
import skillRouter from "./routers/skill.router.js";
import userRouter from "./routers/user.router.js";

config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// ✅ Enable CORS before routes
app.use(cors({
    origin: "http://localhost:5173",  // change if needed
    credentials: true
}));

app.listen(port, () => {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
});

app.use("/api/skillcategories", skillCategoryRouter);
app.use("/api/skills", skillRouter);
app.use("/api/users", userRouter);
