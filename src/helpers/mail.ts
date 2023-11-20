import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(
  mail: string,
  chcekIn: string,
  checkOut: string,
  peoples: string,
  room: string,
  phone: string,
  name: string
): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL_ID, // sender address
    to: mail,

    subject: `Booking Enquiry for ${room}`, // Subject line
    html: `Check In: ${chcekIn}, \n Check Out ${checkOut}, \n Peoples: ${peoples} \n name: ${name} \n Contact: ${phone}`,
  };

  await transporter.sendMail(mailOptions);
}
