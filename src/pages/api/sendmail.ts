import { sendEmail } from "@/helpers/mail";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  console.log(req.headers);

  if (req.method === "POST") {
    const {
      checkIn = "",
      checkOut = "",
      adult,
      children = 0,
      roomType = "",
      reqRooms,
      phone = "",
    } = req.body;

    if (
      checkIn.length === 0 ||
      checkOut.length === 0 ||
      roomType.length === 0 ||
      phone.length === 0
    ) {
      res.status(400).json({ message: "Invalid Data" });
    }

    if (isNaN(adult) || isNaN(reqRooms) || isNaN(children)) {
      res.status(400).json({ message: "Invalid Data" });
    }

    await sendEmail(
      "booking@aamraaresort.com",
      checkIn,
      checkOut,
      adult,
      children,
      roomType,
      reqRooms,
      phone
    );
    res.status(200).json({ message: "Email Sent Successfully" });
  } else {
    res.status(400).json({ message: "Method Not Allowed" });
  }
}
