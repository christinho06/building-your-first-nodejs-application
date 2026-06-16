const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',       // replace with your Gmail
    pass: 'your-app-password'           // replace with your Gmail App Password
  }
});

// Define mail options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello from Node.js!',
  text: 'This email was sent using Node.js and the nodemailer package.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});