const nodemailer = require("nodemailer");

//ethernal email for smtp server
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "natasha87@ethereal.email",
    pass: "WMxfkCjrFZ7yve9DuV",
  },
});

async function sendEmail() {
  const infor = await transporter.sendMail({
    from: "Natasha <natasha87@ethereal.email>",
    to: "dpraidola@gmail.com, dpraimd@gmail.com",
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

sendEmail().catch((err) => console.log("Error:::", err));
