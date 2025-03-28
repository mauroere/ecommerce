const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.error("Authorization header missing or invalid");
      return res.status(401).json({ message: "Unauthorized: Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id); // Use `findByPk` for primary key lookup
    if (!user) {
      console.error("User not found for token:", decoded);
      return res.status(404).json({ message: "User not found. Please log in again." });
    }

    req.user = user; // Attach user to the request
    next();
  } catch (error) {
    console.error("Error in authenticate middleware:", error.message);
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

module.exports = authenticate;
