import express from "express";

import { createSkill } from "../controllers/skill.controller.js";

const router = express.Router();

router.post("/createskill", createSkill);

export default router; 