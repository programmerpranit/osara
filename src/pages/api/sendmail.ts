import { sendEmail } from "@/helpers/mail";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  if (req.method === "POST") {
    const { checkIn, checkOut, peoples, room, phone, name } = req.body;

    if (
      checkIn === undefined ||
      checkOut === undefined ||
      peoples === undefined ||
      room === undefined ||
      phone === undefined ||
      name === undefined
    ) {
      res.status(400).json({ message: "Invalid Input" });
      return;
    }
    await sendEmail(
      "booking@aamraaresort.com",
      checkIn,
      checkOut,
      peoples,
      room,
      phone,
      name
    );
    res.status(200).json({ message: "Email Sent Successfully" });
  } else {
    res.status(400).json({ message: "Method Not Allowed" });
  }
}
