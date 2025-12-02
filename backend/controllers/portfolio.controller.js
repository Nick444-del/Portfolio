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
        const { title, github, demo } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        // console.log("Cloudinary env:", {
        //     cloud_name: process.env.CLOUDINARY_NAME,
        //     api_key: process.env.CLOUDINARY_KEY,
        //     api_secret: process.env.CLOUDINARY_SECRET,
        // });

        console.log("Uploaded File Info:", req.file); // ✅ Debug

        const imageURL = req.file.path; // ✅ Cloudinary URL comes in .path

        const newProject = await portfolioModel.create({
            thumbnail: imageURL,  // ✅ matched schema
            title,
            github,
            live: demo,
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
