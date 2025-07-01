const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const { default: translate } = require("@vitalets/google-translate-api"); // FIXED

const app = express();
app.use(cors());
const PORT = 4000;

// Utility: Convert English date (2025-07-01) to Hindi (1 जुलाई 2025)
const getHindiDate = (dateStr) => {
  try {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("hi-IN", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  } catch {
    return "";
  }
};

app.get("/horoscope", async (req, res) => {
  const sign = req.query.sign || "aries";
  const lang = req.query.lang || "hi";

  try {
    const response = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
    const data = await response.json();

    let description = data.horoscope;

    // Translate if Hindi selected
    if (lang === "hi") {
      try {
        const translated = await translate(description, {
          to: "hi",
          client: "gtx", // ✅ Force fallback
        });
        description = translated.text;
      } catch (err) {
        console.error("❌ Translation Error:", err.message);
        description = "अनुवाद में अस्थायी समस्या है। कृपया English में देखें।";
      }
    }

    const hindiDate = getHindiDate(data.date);

    res.json({
      description,
      date: data.date,
      hindiDate,
    });
  } catch (err) {
    console.error("❌ API Error:", err.message);
    res.status(500).json({
      description: "राशिफल लोड करने में समस्या आई है।",
      date: "",
      hindiDate: "",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Horoscope API server running on http://localhost:${PORT}`);
});
