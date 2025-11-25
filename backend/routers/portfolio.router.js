import express from "express";
import upload from "../configs/multer.js";
import { getAllPortfolios, creatProject } from "../controllers/portfolio.controller.js";

const router = express.Router();

router.get("/getallportfolios", getAllPortfolios);
router.post(
    "/createproject",
    upload.single("image"),
    creatProject
)

export default router;