import userModel from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            success: true,
            data: users,
            message: "Users fetched successfully",
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({ name, email, password });

        if(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                return res.status(400).json({ error: "Invalid email format" });
            }
            if(user.email === email) {
                return res.status(400).json({ error: "Email already exists" });
            }
        }

        res.status(200).json({
            success: true,
            data: user,
            message: "User created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            error: error.message,
            stack: error.stack 
        });
    }
}