// pages/api/donorCount.js
import { connectDB } from "../../lib/mongodb";
import mongoose from "mongoose";

const DonorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  state: String,
  district: String,
  bloodGroup: String,
});

const Donor = mongoose.models.Donor || mongoose.model("Donor", DonorSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const count = await Donor.countDocuments(); // total donors
      res.status(200).json({ total: count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch donor count" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
