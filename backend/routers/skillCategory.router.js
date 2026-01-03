import express from "express";

import { createSkillCategory, getAllSkillCategories, getCategoriesWithSkills, deleteCategoy } from "../controllers/skillCategory.controller.js";

const router = express.Router();

router.post("/createskillcategory", createSkillCategory);
router.get("/getallskillcategories", getAllSkillCategories);
router.get("/getcategorieswithskills", getCategoriesWithSkills);
router.delete("/deleteskillcategory/:id", deleteCategoy);

export default router;