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

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = useState("aries");
  const [horoscope, setHoroscope] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("hi"); // 'hi' or 'en'

  const fetchHoroscope = async (sign) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/horoscope?sign=${sign}&lang=${language}`);
      const data = await res.json();
      setHoroscope(data.description || "राशिफल उपलब्ध नहीं है।");
      setDate(data.date || "");
    } catch (error) {
      console.error("Fetch error:", error);
      setHoroscope("राशिफल लोड करने में समस्या आई है।");
      setDate("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHoroscope(selectedSign);
  }, [selectedSign, language]);

  return (
    <div className="horoscope-container">
      <h2 className="horoscope-title">🔮 आज का राशिफल</h2>

      {/* Language Toggle */}
      <div className="lang-toggle">
        <button onClick={() => setLanguage("hi")} disabled={language === "hi"}>
          हिंदी
        </button>
        <button onClick={() => setLanguage("en")} disabled={language === "en"}>
          English
        </button>
      </div>

      {/* Zodiac Dropdown */}
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
