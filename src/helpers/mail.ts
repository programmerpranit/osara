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
  adult: number,
  children: number,
  roomType: string,
  reqRooms: string,
  phone: string
): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL_ID, // sender address
    to: mail,

    subject: `Booking Enquiry for ${reqRooms} rooms of ${roomType}`, // Subject line
    html: `Check In: ${chcekIn}, \n Check Out ${checkOut}, \n Adult: ${adult} \n Children: ${children} \n Contact: ${phone}`,
  };

  await transporter.sendMail(mailOptions);
}
