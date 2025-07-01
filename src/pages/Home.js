import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pic from "../assets/OIP.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">अपनी ब्रह्मांडीय यात्रा को जानें</h1>
        <p className="home-description">
          व्यक्तिगत राशिफल, जन्म कुंडली की जानकारी, और ज्योतिषीय मार्गदर्शन प्राप्त करें जो आपके जीवनपथ को उजागर करे।
        </p>

        <div className="home-buttons">
          <Link to="/horoscope" className="btn btn-primary">
            दैनिक राशिफल →
          </Link>
          <Link to="/booking" className="btn btn-outline">
            परामर्श बुक करें →
          </Link>
        </div>

        <div className="home-image">
          <img
            src={pic}
            alt="ज्योतिषीय चित्रण"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
