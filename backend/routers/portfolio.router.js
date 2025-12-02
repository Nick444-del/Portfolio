import express from "express";
import upload from "../configs/multer.js";
import { getAllPortfolios, creatProject, deleteProject } from "../controllers/portfolio.controller.js";

const router = express.Router();

router.get("/getallportfolios", getAllPortfolios);
router.post(
    "/createproject",
    upload.single("thumbnail"),
    creatProject
)
router.delete("/deleteproject/:id", deleteProject);

export default router;