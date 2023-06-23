const express = require('express')
const nodemailer = require('nodemailer');
require('dotenv').config()

async function mailsend(){
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER, 
        pass: process.env.PWD
      }
    });
    
    const mailOptions = {
      from: 'david.nduati@thejitu.com',
      to: 'jonathan.mwaniki@thejitu.com',
      subject: 'Weekly Report',
      html: '<p> Here is my weekly report.</p>',
      attachments: [{
        filename: 'report.docx', 
        path: 'C:/Users/David/Desktop/report.docx' 
      }]
    };

    let results = await transporter.sendMail(mailOptions);
    console.log('Email sent:', results.response);
    
  } catch (error) {
    console.error('Error sending email:', error);   
  }
}

module.exports = mailsend;