import React from "react";
import Navbar from "../components/Navbar";
import "./Experience.css";
import Footer from "../components/Footer";

const Experience = () => {
  return (
    <>
      <Navbar />

      <section className="experience-hero">

        <div className="experience-content">
          <p>EXPERIENCE THE JOURNEY</p>
          <h1>Create Memories That Last Forever</h1>
          <h4>From mountain adventures to peaceful beaches, we offer experiencesthat make every trip unforgettable.</h4>

        </div>
      </section>

        <section className="experience">
            <h2>Our Experiences</h2>
            <p> Discover amazing adventures and unforgettable moments with Travelista.</p>

            <div className="experience-box">
                <div className="experience-card">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" alt="Mountain Trek" />
                    <h3>Mountain Trek</h3>
                    <p>Explore beautiful mountains and enjoy thrilling adventures.</p>
                </div>

                <div className="experience-card">
                    <img src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=600" alt="Scuba        Diving" />
                    <h3>Scuba Diving</h3>
                    <p>Dive into the ocean and discover underwater beauty.</p>
                </div>

                <div className="experience-card">
                    <img src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=600" alt="Camping" />
                    <h3>Camping</h3>
                    <p>Spend peaceful nights under the stars with nature.</p>
                </div>

            </div>

        </section>

        <section className="why-experience">
            <h2>Why Choose Our Experiences?</h2>

            <div className="why-box">

                <div className="why-card">
                    <h3>🌍 Unique Destinations</h3>
                    <p>Discover hidden places and breathtaking locations that create unforgettable memories.</p>
                </div>

                <div className="why-card">
                    <h3>✨ Premium Services</h3>
                    <p>Enjoy comfortable stays, expert guides and personalized travel experiences.</p>
                </div>

                <div className="why-card">
                    <h3>🧭 Expert Guidance</h3>
                    <p> Our travel experts help you explore every place safely and confidently.</p>
                </div>

            </div>
        </section>

        <section className="travel-banner">

            <div className="banner-content">
                <h2>Ready For Your Next Adventure?</h2>
                <p>Start exploring the world with Travelista and create memories that stay forever.</p>
                <button>Plan Your Trip</button>
            </div>

        </section>

        <Footer/>













    </>
  );
};

export default Experience;