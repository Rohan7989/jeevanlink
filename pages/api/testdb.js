import { connectDB } from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "✅ MongoDB connection successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ MongoDB connection failed" });
  }
}
//