import React from "react";
import { FaWhatsapp, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import "../pages/Booking.css";

const Booking = () => {
  return (
    <section className="booking-advanced">
      <div className="booking-card">
        <div className="booking-icon">
          <FaCalendarAlt size={60} />
        </div>

        <h2 className="booking-title">व्यक्तिगत सत्र बुक करें</h2>
        <p className="booking-description">
          आइए जुड़ें और आपके ज्योतिषीय संभावनाओं को उजागर करें। एक-से-एक सत्र निर्धारित करने के लिए अपनी पसंदीदा विधि चुनें।
        </p>

        <div className="booking-options">
          <a
            href="https://wa.me/916367512934"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="btn-icon" />
            WhatsApp पर चैट करें
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=st9079025@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn-email"
          >
            <FaEnvelope className="btn-icon" />
            ईमेल द्वारा अनुरोध करें
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
