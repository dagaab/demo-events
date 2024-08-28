import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/config/dbConfig";
import BookingModel from "@/models/booking-model";
import { getMongoDBUserIDOfLoggedInUser } from "@/actions/users";

connectDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const mongoUserId = await getMongoDBUserIDOfLoggedInUser();
      const bookedEvents = await BookingModel.find({
        user: mongoUserId,
      }).populate("event");

      res.status(200).json(bookedEvents);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}