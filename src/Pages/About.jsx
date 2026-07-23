import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="about-content">
          <p>ABOUT US</p>
          <h1>Know More About Travelista</h1>
          <h4> We help people explore the world's most beautiful destinations with comfort, safety and unforgettable experiences.</h4>
        </div>

      </section>

      <section className="about-us">

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800"alt="About Travel"/>
        </div>

        <div className="about-text">
            <h2>Who We Are</h2>
            <p> Travelista is a travel company that helps people discover amazing destinations around the world. Our goal is to make every journey simple, comfortable and memorable.</p>
            <p> We provide the best travel packages, comfortable stays and unforgettable experiences for every traveler.</p>

            <ul>
                <li>✔ Trusted Travel Guides</li>
                <li>✔ Affordable Tour Packages</li>
                <li>✔ 24/7 Customer Support</li>
                <li>✔ Safe & Comfortable Trips</li>
            </ul>

        </div>

      </section>


      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to make travel simple, affordable and memorable for everyone. We believe every journey should create beautiful memories andunforgettable experiences.</p>

        <div className="mission-box">

          <div className="mission-card">
            <h3>🌍 Explore</h3>
            <p>Discover beautiful destinations across the world.</p>
          </div>

          <div className="mission-card">
            <h3>🤝 Trust</h3>
            <p>Provide safe, reliable and comfortable travel services.</p>
          </div>

        <div className="mission-card">
          <h3>✨ Experience</h3>
            <p>Create unforgettable moments for every traveler.</p>
        </div>

        </div>

      </section>

      <Footer/>













    </>
  );
};

export default About;
