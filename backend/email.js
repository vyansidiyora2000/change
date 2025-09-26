// backend/email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
});

// Verify transporter
transporter.verify((err, success) => {
  if (err) console.error("❌ Mail server error:", err);
  else console.log("✅ Mail server ready");
});
