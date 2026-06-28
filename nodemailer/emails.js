import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { transporter, sender } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	try {
		const info = await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: email,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
		});

		console.log("Verification email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending verification email:", error);
		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	try {
		const info = await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: email,
			subject: "Welcome to Auth App!",
			html: `
				<h1>Welcome, ${name}! 🎉</h1>
				<p>Thanks for joining us. Your account has been verified successfully.</p>
				<p>We're glad to have you on board.</p>
				<br/>
				<p>Best regards,<br/>${sender.name}</p>
			`,
		});

		console.log("Welcome email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending welcome email:", error);
		throw new Error(`Error sending welcome email: ${error}`);
	}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
	try {
		const info = await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: email,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
		});

		console.log("Password reset email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending password reset email:", error);
		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	try {
		const info = await transporter.sendMail({
			from: `"${sender.name}" <${sender.email}>`,
			to: email,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
		});

		console.log("Password reset success email sent:", info.messageId);
	} catch (error) {
		console.error("Error sending password reset success email:", error);
		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
