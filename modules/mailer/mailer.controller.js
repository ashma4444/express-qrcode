"use strict";
const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailer = async (email) => {
  const msgOptions = {
    from: "np01cp4s210041@islingtoncollege.edu.np",
    to: email.toString(),
    subject: "Hello from Ashma Maharjan!",
    text: "Test email! Ma Takuri ko dd ho",
  };
  const info = await transporter.sendMail(msgOptions);

  return info;
};

module.exports = { mailer };
