import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Joi from "joi";
import { configDotenv } from 'dotenv';

export async function handleRegisterUser(req, res) {
  try {
    const { name, email, phone, password, role } = req.body;
    
    const normalizedEmail = email.toLowerCase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      name,
      email: normalizedEmail,
      phone,
      passwordHash,
      role: role || "Freelancer", // Default role is Freelancer
    });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export async function handleLoginUser(req, res) {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    // Find the user by email
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { email: user.email, _id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      email: user.email,
      name: user.name,
      role: user.role,
      success: true,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
}