import express from "express";

import { getAllSkills, createSkill, deleteSkill } from "../controllers/skill.controller.js";

const router = express.Router();

router.get("/getallskills", getAllSkills);
router.post("/createskill", createSkill);
router.delete("/deleteskill/:id", deleteSkill);

export default router; 