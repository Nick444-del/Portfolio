import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const authHeader = req.header.authorization;

    if (!authHeader) {
        return res.status(401).json({ success: false, error: "No token provided" });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, error: "Invalid token" });
    }
}

export default auth