// pages/api/chat-bot.js
const ANSWERS = {
  purpose:
    "JeevanLink helps people quickly find blood donors in emergencies.",
  register:
    "To register, click the Register button on the homepage, fill in your details (name, phone, state, district, blood group), and submit the form.",
  search:
    "To find donors, use the Quick Search form in the home page. Select your State, District, and Blood Group, then click Search. You will see a list of matching donors with their phone numbers.",
  contact:
    "In the search results, you will see the names and phone numbers of matching donors. You can contact them directly from there.",
  about:
    "This website was created by Rohan as a community project to make it easier to connect with blood donors ,click on 'About Us' in the Navbar for more information.",
  fallback:
    "Sorry, I can answer questions about the website purpose, how to register, how to search, how to contact donors, and who built this site. Please ask about one of these topics.",
};

function detectIntent(text, hintedIntent) {
  const t = (text || "").toLowerCase();
  if (hintedIntent) return hintedIntent;

  if (t.includes("purpose") || (t.includes("what") && t.includes("website")))
    return "purpose";
  if (t.includes("register") || t.includes("sign up"))
    return "register";
  if (t.includes("search") || t.includes("find"))
    return "search";
  if (t.includes("contact") || t.includes("connect"))
    return "contact";
  if (t.includes("who") || t.includes("built"))
    return "about";

  return "fallback";
}

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text, intent } = req.body;
      const detected = detectIntent(text, intent);
      const reply = ANSWERS[detected] || ANSWERS.fallback;
      res.status(200).json({ reply });
    } catch {
      res.status(200).json({ reply: "Something went wrong. Please try again." });
    }
  } else {
    res.status(405).json({ reply: "Method not allowed" });
  }
}
