import express from "express";

import { createSkillCategory, getAllSkillCategories } from "../controllers/skillCategory.controller.js";

const router = express.Router();

router.post("/createskillcategory", createSkillCategory);
router.get("/getallskillcategories", getAllSkillCategories);

export default router;