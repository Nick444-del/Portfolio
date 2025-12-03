import skillsModel from "../models/skills.model.js";

export const getAllSkills = async (req, res) => {
    try {
        const skills = await skillsModel.find().populate("category");
        res.status(200).json({
            success: true,
            data: skills,
            message: "Skills fetched successfully",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createSkill = async (req, res) => {
    try {
        const { name, level, category } = req.body;
        const skill = await skillsModel.create({ name, level, category });
        res.status(200).json({
            success: true,
            data: skill,
            message: "Skill created successfully",
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteSkill = async (req, res) => {
    try {
        const deletedSkill = await skillsModel.findByIdAndDelete(req.params.id);

        if(!deletedSkill) {
            return res.status(404).json({ error: "Skill not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Skill deleted successfully",
            data: deletedSkill,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}