import React, { useState, useEffect } from "react";
import "../pages/Horoscope.css";

const zodiacSigns = [
  { name: "मेष", value: "aries" },
  { name: "वृषभ", value: "taurus" },
  { name: "मिथुन", value: "gemini" },
  { name: "कर्क", value: "cancer" },
  { name: "सिंह", value: "leo" },
  { name: "कन्या", value: "virgo" },
  { name: "तुला", value: "libra" },
  { name: "वृश्चिक", value: "scorpio" },
  { name: "धनु", value: "sagittarius" },
  { name: "मकर", value: "capricorn" },
  { name: "कुंभ", value: "aquarius" },
  { name: "मीन", value: "pisces" },
];

// ✅ CRA .env variable
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState("aries");
  const [horoscope, setHoroscope] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("hi");
  const [error, setError] = useState("");

  const fetchHoroscope = async (sign) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${BASE_URL}/horoscope?sign=${sign}&lang=${language}`
      );

      if (!res.ok) {
        throw new Error(`API failed with status ${res.status}`);
      }

      const data = await res.json();

      if (!data.description) {
        throw new Error("No description received.");
      }

      setHoroscope(data.description);
      setDate(data.hindiDate || data.date || "");
    } catch (err) {
      console.error("Fetch error:", err);
      setError("राशिफल लोड करने में समस्या आई है। कृपया बाद में प्रयास करें।");
      setHoroscope("");
      setDate("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope(selectedSign);
  }, [selectedSign, language]);

  return (
    <div className="horoscope-container">
      <h2 className="horoscope-title">🔮 आज का राशिफल</h2>

      <div className="lang-toggle">
        <button onClick={() => setLanguage("hi")} disabled={language === "hi"}>
          हिंदी
        </button>
        <button onClick={() => setLanguage("en")} disabled={language === "en"}>
          English
        </button>
      </div>

      <select
        className="horoscope-select"
        value={selectedSign}
        onChange={(e) => setSelectedSign(e.target.value)}
      >
        {zodiacSigns.map((sign) => (
          <option key={sign.value} value={sign.value}>
            {sign.name}
          </option>
        ))}
      </select>

      {loading ? (
        <p className="horoscope-loading">लोड हो रहा है...</p>
      ) : error ? (
        <p className="horoscope-error">{error}</p>
      ) : (
        <>
          {date && <p className="horoscope-date">📅 तारीख: {date}</p>}
          <p className="horoscope-text">{horoscope}</p>
        </>
      )}
    </div>
  );
};

export default Horoscope;
