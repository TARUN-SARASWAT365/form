// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/horoscope">Horoscope</Link>
    </div>
  );
};

export default Navbar;
