import express from "express";
import { config } from "dotenv";

import { connectToDatabase } from "./configs/connection.js";
import skillCategoryRouter from "./routers/skillCategory.router.js";
import skillRouter from "./routers/skill.router.js";

config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
    connectToDatabase();
    console.log(`Server is running on port ${port}`);
});

app.use("/api/skillcategories", skillCategoryRouter);
app.use("/api/skills", skillRouter);