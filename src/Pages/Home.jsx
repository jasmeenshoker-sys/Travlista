import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero">

        <div className="left">
          <p className="one">DISCOVER THE WORLD</p>
          <h1>
            Travel Beyond <br />
            The Ordinary
          </h1>
          <p className="two"> Discover handpicked destinations, luxury stays,
            and unforgettable experiences crafted for modern travelers </p>

          <div className="hero-buttons">
            <button className="explore-btn">Explore Now</button>
            <button className="video-btn">Watch Video</button>
          </div>
        </div>

        <div className="right">
         <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600" className="hero-image"/>

        </div>

      </div>

      <section className="cards">

        <div className="card">
          <h2>15K+</h2>
          <p>Happy Travelers</p>
        </div>

        <div className="card">
          <h2>120+</h2>
          <p>Luxury Destinations</p>
        </div>

        <div className="card">
          <h2>4.9★</h2>
          <p>Average Rating</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

      
      <section className="destination">
        <h2>Popular Destinations</h2>
        <p>Explore our most loved travel destinations.</p>

        <div className="destination-box">

          <div className="box">
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500" alt="Bali" />
            <h3>Bali</h3>
            <p>Indonesia</p>
          </div>

          <div className="box">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500" alt="Switzerland" />
            <h3>Switzerland</h3>
            <p>Europe</p>
          </div>

          <div className="box">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500" alt="Maldives" />
            <h3>Maldives</h3>
            <p>Indian Ocean</p>
          </div>

        </div>

      </section>

      <section className="why">
        <h2>Why Choose Us</h2>
        <p>We make every journey comfortable, safe and unforgettable.</p>

        <div className="why-box">

          <div className="why-card">
            <h3>✈ Best Destinations</h3>
            <p> Explore beautiful places around the world with carefully selected travel packages.</p>
          </div>

          <div className="why-card">
            <h3>🏨 Luxury Hotels</h3>
            <p>Stay in comfortable and premium hotels with excellent facilities.</p>
          </div>

          <div className="why-card">
            <h3>💰 Affordable Prices</h3>
            <p>Enjoy your dream vacation at the best price without compromising quality.</p>
          </div>

        </div>

    </section>

    <Footer/>

    



      








    </>
  );
  };

export default Home;