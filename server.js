// server.js

import express from 'express';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer(); 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aadityatrivedi3124@gmail.com',
    pass: 'At31243.',
  },
});

app.post('/register', upload.single('cv'), (req, res) => {
  const { name, email, password } = req.body;

  console.log('Registration data:', { name, email, password });

  const userId = uuidv4();

  const mailOptions = {
    from: 'aadityatrivedi3124@gmail.com',
    to: email,
    subject: 'Welcome to Fare Jobs',
    text: `Hello ${name},\n\nThank you for registering at Fare Jobs. Your unique ID is ${userId}.\n\nBest regards,\nThe Fare Jobs Team`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Registration email sent successfully');
    res.status(200).send('Registration successful');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
