import portfolioModel from "../models/portfolio.model.js";

export const getAllPortfolios = async (req, res) => {
    try {
        const portfolio = await portfolioModel.find();
        return res.status(200).json({
            success: true,        // ✅ add success flag
            data: portfolio,     // ✅ wrap array inside data
            message: "Portfolio projects fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};



export const creatProject = async (req, res) => {
    try {
        const { title, github, live } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const imageURL = req.file.path;

        const newProject = await portfolioModel.create({
            thumbnail: imageURL,
            title,
            github,
            live,
        });

        return res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: newProject,
        });

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};


export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await portfolioModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            data: deletedProject,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getPortfolio = async (req, res) => {
    try {
        const portfolio = await portfolioModel.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: portfolio,
            message: "Portfolio project fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}