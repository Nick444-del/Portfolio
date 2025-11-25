import express from "express";
import { getAllUsers, createUser, loginUser, getLoggedInUser } from "../controllers/user.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.post("/createuser", createUser);
router.post("/loginuser", loginUser);
router.get("/me", auth, getLoggedInUser);

export default router;