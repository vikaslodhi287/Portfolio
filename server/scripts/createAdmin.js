import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Delete old admin if exists
    await Admin.deleteOne({
      email: "vikaslodhi287@gmail.com",
    });

    const admin = await Admin.create({
      username: "vikaslodhi",
      email: "vikaslodhi287@gmail.com",
      password: "vi$12ka3@#",
      role: "superadmin",
    });

    console.log("\n==============================");
    console.log("✅ Admin Created Successfully");
    console.log("==============================");
    console.log("Username :", admin.username);
    console.log("Email    :", admin.email);
    console.log("Role     :", admin.role);
    console.log("==============================\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

createAdmin();