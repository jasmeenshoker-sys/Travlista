import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <h2>Travelista</h2>
          <p>
            Explore the world with comfort, adventure and unforgettable
            memories.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Experience</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 travelista@gmail.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Punjab, India</p>
        </div>

      </div>

      <hr />

      <p className="copy">
        © 2026 Travelista. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;