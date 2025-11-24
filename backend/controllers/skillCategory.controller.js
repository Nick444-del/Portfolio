import skillCategoriesModel from "../models/skillCategories.model.js";
import skillsModel from "../models/skills.model.js";

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

export const getCategoriesWithSkills = async (req, res) => {
    try {
        // fetch all categories
        const categories = await skillCategoriesModel.find();

        // build the grouped structure
        const result = await Promise.all(
            categories.map(async (cat) => {
                const skills = await skillsModel.find({ category: cat._id });

                return {
                    category: cat.name,
                    skills: skills.map(skill => ({
                        name: skill.name,
                        level: skill.level
                    }))
                };
            })
        );

        res.status(200).json({
            success: true,
            data: result,
            message: "Categories with skills fetched successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}