const nodemailer = require("nodemailer");
require("nodemailer").config();

//ethernal email for smtp server
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//function  for sending email
async function sendEmail() {
  const infor = await transporter.sendMail({
    from: "Deviprasad <dpraimd@gmail.com>",
    to: "dpraidola@gmail.com",
    subject: "Hello world",
    text: "Hello world...",
    html: "<h1>Hi Good morning</h1>",
  });
  console.log("message sent:::", infor.messageId);
  console.log("message sent:::", infor.accepted);
  console.log("message sent:::", infor.envelope);
  console.log("message sent:::", infor.pending);
  console.log("message sent:::", infor.rejected);
  console.log("message sent:::", infor.response);
}

//logging the error if mail sending fails
sendEmail().catch((err) => console.log("Error:::", err));
