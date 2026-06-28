import nodemailer from "nodemailer";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
	dotenv.config();
}

export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS, // Gmail App Password
	},
});

export const sender = {
	email: process.env.EMAIL_USER,
	name: process.env.EMAIL_SENDER_NAME || "Auth App",
};
