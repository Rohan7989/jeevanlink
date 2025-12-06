// pages/api/search.js
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
  if (req.method === "POST") {
    const { state, district, bloodGroup } = req.body;
    try {
      await connectDB();
      const donors = await Donor.find(
        { state, district, bloodGroup },
        { name: 1, phone: 1, _id: 0 }
      );
      res.status(200).json(donors);
    } catch (error) {
      res.status(500).json({ error: "Search failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
