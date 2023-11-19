import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: "test.user@pranitpatil.com",
    pass: "",
  },
});

export async function sendEmail(mail, event) {
  const mailOptions = {
    from: "test.user@pranitpatil.com", // sender address
    to: mail,

    subject: `Person Name:  ${event.name}`, // Subject line
    html: `Event Type ${event.type}, Event Date ${event.date}`,
  };

  const info = await transporter.sendMail(mailOptions);
}
