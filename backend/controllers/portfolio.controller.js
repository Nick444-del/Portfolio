import portfolioModel from "../models/portfolio.model.js";

export const getAllPortfolios = async (req, res) => {
    try {
        const portfolio = await portfolioModel.find();
        res.status(200).json(portfolio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const creatProject = async (req, res) => {
    try {
        const { title, github, demo } = req.body;

        if(!req.file){
            return res.status(400).json({ message: "Image is required" });
        }

        const imageURL = req.file.path;

        const newProject = await portfolioModel.create({
            title,
            github,
            demo,
            image: imageURL,
        })

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: newProject
        })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

