import express from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.post("/createuser", createUser);

export default router;