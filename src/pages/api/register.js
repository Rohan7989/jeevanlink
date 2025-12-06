import { connectDB } from "../../../lib/mongodb";
import mongoose from "mongoose";

// Schema define karo
const DonorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  state: String,
  district: String,
  bloodGroup: String,
});

// Model reuse karo agar pehle se bana ho
const Donor = mongoose.models.Donor || mongoose.model("Donor", DonorSchema);


export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const donor = new Donor(req.body);
      await donor.save();
      res.status(201).json({ message: "Donor registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to register donor" });
    }
  } 
  else if (req.method === "GET") {
    try {
      const donors = await Donor.find({});
      res.status(200).json(donors); // <-- yahan array return hoga
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch donors" });
    }
  } 
  else {
    res.status(405).json({ error: "Method not allowed" });
  }
}



