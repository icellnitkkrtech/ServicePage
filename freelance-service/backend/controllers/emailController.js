const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

async function sendEmail(req, res) {
    const { emailBody, toEmail } = req.body;

    if (!emailBody || !toEmail) {
        return res.status(400).json({ message: 'Email body and recipient email are required' });
    }

    const senderEmail = process.env.SENDER_EMAIL;
    const senderPassword = process.env.SENDER_PASSWORD;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;

    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: senderEmail,
            pass: senderPassword,
        },
    });

    const mailOptions = {
        from: senderEmail,
        to: toEmail,
        subject: 'Message from Backend',
        text: emailBody,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}

module.exports = { sendEmail };
