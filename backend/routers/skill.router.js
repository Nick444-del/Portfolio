import express from "express";

import { getAllSkills,createSkill } from "../controllers/skill.controller.js";

const router = express.Router();

router.get("/getallskills", getAllSkills);
router.post("/createskill", createSkill);

export default router; 