// src/pages/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_041ynh8",        // ✅ Your Service ID
        "template_cwvcegc",       // ✅ Your Template ID
        form.current,
        "xq3Ejav17S-jlyT9A"       // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          We'd love to hear from you! Reach out or leave a message below.
        </p>

        <div className="contact-item">📧 saraswattarun740@gmail.com</div>
        <div className="contact-item">📞 +91-6367512934</div>
        <div className="contact-item">📍 Sri Ganganagar,Rajasthan,India</div>

        
      </div>
    </div>
  );
};

export default Contact;
