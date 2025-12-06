
// pages/api/donors.js
import { connectDB } from "../../../lib/mongodb";
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
      const { state, district, group } = req.query;

      // Filter object
      const filter = {};
      if (state) filter.state = state;
      if (district) filter.district = district;
      if (group) filter.bloodGroup = group;

      const donors = await Donor.find(filter);
      res.status(200).json(donors); // <-- array return karega
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch donors" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
