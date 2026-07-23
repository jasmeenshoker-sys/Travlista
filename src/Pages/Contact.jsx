import React from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";


const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-hero">

        <div className="contact-text">
          <p>GET IN TOUCH</p>
          <h1>Let's Plan Your Next Journey</h1>
          <h4>Have questions about your trip? Our travel experts are here to help you create unforgettable experiences.</h4>
        </div>

      </section>


      <section className="contact">
        <h2>Contact Us</h2>
        <p>We would love to hear from you.</p>

        <div className="contact-box">

          <div className="info">
            <div>
              <h3>📍 Location</h3>
              <p>Punjab, India</p>
            </div>

            <div>
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <h3>✉ Email</h3>
              <p>travelista@gmail.com</p>
            </div>

          </div>


          <form className="form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </form>


        </div>

      </section>
      

    </>
  );
};

export default Contact;