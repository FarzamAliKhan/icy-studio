const express = require('express');
// const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
// const upload = multer();

// Load environment variables user and pass
const USER = process.env.USER;
const PASS = process.env.PASS;
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4321', // your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }));


// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '5afd7bca4aa551',  //farzam909@gmail.com test email
        pass: 'd0fd7764f7ab28', //password
    },
});

// API endpoint for sending email with attachments
app.post('/send-email', (req, res) => {
    const {Interests, Email, Description, budget } = req.body;
    // const attachments = req.files;

    const mailOptions = {
        from: req.Email,
        to: 'farzam909@gmail.com',
        subject: `ICY STUDIO: Message from ${req.email}`,
        text: req.Description,
        // attachments: attachments,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});

// Start the server
app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});