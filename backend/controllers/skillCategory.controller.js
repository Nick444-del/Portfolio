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
        const categories = await skillCategoriesModel.find();

        const result = await Promise.all(
            categories.map(async (cat) => {
                const skills = await skillsModel.find({ category: cat._id });

                return {
                    _id: cat._id,
                    name: cat.name,
                    skills: skills.map(skill => ({
                        _id: skill._id,
                        name: skill.name,
                        level: skill.level,
                        createdAt: skill.createdAt
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
};

export const deleteCategoy = async (req, res) => {
    try {
        const findCategory = await skillCategoriesModel.findByIdAndDelete(req.params.id);
        if (!findCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: findCategory
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}