// src/pages/FormPage.js
import React from "react";

const FormPage = () => (
  <div style={{ padding: "20px" }}>
    <h2>Book Your Consultation</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <br />
      <input type="date" placeholder="DOB" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default FormPage;
