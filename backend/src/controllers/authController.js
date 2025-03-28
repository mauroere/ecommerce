const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Register a new user
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log("Registration request received with:", { email, password, name });

    // Validate input
    if (!email || !password || !name) {
      console.error("Validation failed: Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } }); // Use `where` to filter
    if (existingUser) {
      console.error("User already exists with email:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({ email, password: hashedPassword, name });

    console.log("User registered successfully:", newUser.id);
    // Respond with success
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in register controller:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received with:", { email, password });

    if (!email || !password) {
      console.error("Validation failed: Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.error("User not found for email:", email);
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error("Invalid credentials for email:", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token generated for user:", user.id);

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Google OAuth login
const oauthLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name } = payload;

    let user = await User.findOne({ where: { email } });
    if (!user) {
      user = await User.create({ name, email });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error with Google login:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Example handler function
const exampleHandler = (req, res) => {
  res.json({ message: "Example route is working!" });
};

// Get current user
const getCurrentUser = async (req, res) => {
  try {
    const user = req.user; // `req.user` debería ser configurado por el middleware `authenticate`
    if (!user) {
      console.error("No user attached to request");
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getCurrentUser:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Export the handlers
module.exports = {
  register,
  login,
  oauthLogin,
  exampleHandler, // Ensure this is exported
  getCurrentUser,
};
