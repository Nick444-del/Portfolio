import skillCategoriesModel from "../models/skillCategories.model.js";

export const createSkillCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const skillCategory = await skillCategoriesModel.create({ name });
        res.status(200).json({
            success: true,
            data: skillCategory,
            message: "Skill category created successfully",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllSkillCategories = async (req, res) => {
    try {
        const skillCategories = await skillCategoriesModel.find();
        res.status(200).json({
            success: true,
            data: skillCategories,
            message: "Skill categories fetched successfully",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}