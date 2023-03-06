const nodemailer = require("nodemailer");
const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  secure: true,
  port: 587,
  auth: {
    user: "chauhieu.nina@gmail.com",
    pass: "wbkdffabbgybbtnn",
  },
});
module.exports = mailer;
