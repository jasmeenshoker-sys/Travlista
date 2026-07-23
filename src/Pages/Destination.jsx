import React from "react";
import Navbar from "../components/Navbar";
import "./Destination.css";
import Footer from "../components/Footer";

const Destination = () => {
  return (
    <>
      <Navbar />

      <section className="destination-hero">

        <div className="destination-content">
          <p>DISCOVER NEW PLACES</p>
          <h1>Explore Amazing Destinations</h1>
          <h4>Find the world's most beautiful places and create unforgettable travel memories with Travelista.</h4>
          <button>Explore Places</button>
        </div>

      </section>

      <section className="places">
        <h2>Popular Destinations</h2>
        <p>Choose your favorite place and start your next adventure.</p>

        <div className="place-box">

          <div className="place-card">
            <img src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600" alt="Bali" />
            <h3>Bali</h3>
            <span>Indonesia</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" alt="Maldives" />
            <h3>Maldives</h3>
            <span>Indian Ocean</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600" alt="Switzerland" />
            <h3>Switzerland</h3>
            <span>Europe</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg" alt="Paris" />
            <h3>Paris</h3>
            <span>France</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://images.squarespace-cdn.com/content/v1/5c7976ec11f78465c3ab8a2d/374bf0e1-70cc-4d06-85e7-29668692b586/Dubai_December+12%2C+2025_12374.jpg" alt="Dubai" />
            <h3>Duabi</h3>
            <span>UAE</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://cdn.britannica.com/02/102-050-B47E7AA4/Phoenix-Hall-part-Byodo-Temple-Japan-Uji-1053.jpg" alt="" />
            <h3>Kyoto </h3>
            <span>Japan</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRmRbiCbrejxTrlbh7lSNqiaOOOKhg9LFTueTlxPsQME-kEoz1K5t9Ko&s=10" alt="" />
            <h3>Santorini</h3>
            <span>Greece</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvj0aSctXleklJSJcbWfxkXy8H8WWZPRwx3Z1sNQ5etIvBTIdQnoXcBoY&s=10" alt="" />
            <h3>New York</h3>
            <span>USA</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://embracesomeplace.com/wp-content/uploads/2019/06/DSC02512.jpg" alt="" />
            <h3>Vanice</h3>
            <span>Itely</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://images.squarespace-cdn.com/content/v1/6321be983796bc30b4aff55b/1759437066432-IZSNEEMKZG30E5BUOKA0/Cairo-cityscape-with-Pyramids-Egypt.jpg" alt="" />
            <h3>Cairo</h3>
            <span>Egypt</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lTAqTDnBO40hTJpnBrHHIUIm1FFGYCX6bbJKm6v0IkWUpHkaJGDSun8&s=10" alt="" />
            <h3>Bangkok</h3>
            <span>Thailand</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTks6wxxR7_ByEnZO1i6X3xoFyfUjNLbvi_kmL9QveCu2DVIriSUajHppjA&s=10" alt="" />
            <h3>Cape Town</h3>
            <span>South Africa</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/methode/2019/03/20/c4eada4a-46f4-11e9-b5dc-9921d5eb8a6d_image_hires_120358.jpg?itok=-p55oqWq&v=1553054650" alt="" />
            <h3>Seoul</h3>
            <span>South Korea</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjL8C-7dvqSDSE88kGLonFj_tu8OsI_8uHPeyCfvEwpcxJityLMA-5pvT&s=10" alt="" />
            <h3>Rio de Janeiro</h3>
            <span>Brazil</span>
            <button>Explore</button>
          </div>

          <div className="place-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6Ms5o9QoI_nIa0pUW3toy0e8ZjLRURVyH4vaqsmsBiVW3HZohIHJNy0&s=10" alt="" />
            <h3>Interlaken</h3>
            <span>Switzerland</span>
            <button>Explore</button>
          </div>

        </div>

      </section>

      <Footer/>

    
      









    </>
  );
};

export default Destination;