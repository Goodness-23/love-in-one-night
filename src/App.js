// App.js
import React from "react";
import "./App.css";
import flyer from "./assets/flyer.jpeg"; 
import { FaShareAlt, FaYoutube } from "react-icons/fa";

function App() {
  const youtubeVideoId = "YVDvHZ1lDJo";
  const youtubeLink = `https://youtu.be/${youtubeVideoId}`;

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${flyer})` }}>
        <div className="overlay">
          <div className="hero-content">
            <h1>Love In One Night</h1>
            <p className="tagline">Redemption. Healing. Grace.</p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => openLink(youtubeLink)}>
                🎬 Watch Now
              </button>
              <a href="#about" className="secondary-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="glass-card">
          <h2>About The Movie</h2>
          <p>
            In just one life-changing night, buried pain resurfaces, hearts are confronted,
            and the healing power of God's love begins to restore what was once broken.
          </p>
          <p>
            <strong>Love In One Night</strong> explores fatherly love, past wounds,
            unforgiveness, and the kind of grace that only God can give.
          </p>
        </div>
      </section>

      {/* MOVIE SECTION WITH ONLY LIKE / COMMENT */}
      <section className="movie">
        <h2>Watch The Movie</h2>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="Love In One Night"
            allowFullScreen
          ></iframe>
        </div>

        {/* ONLY ONE BUTTON */}
        <div className="social-buttons">
          <button
            onClick={() => openLink(`https://www.youtube.com/watch?v=${youtubeVideoId}`)}
            className="social-btn"
          >
            <FaShareAlt size={20} /> Like / Comment
          </button>
        </div>
      </section>

      {/* FLOATING YOUTUBE BUTTON */}
      <div className="floating-btn" onClick={() => openLink(youtubeLink)}>
        <FaYoutube size={28} color="#FF0000" />
      </div>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Love In One Night | A Greenstones Production</p>
      </footer>
    </div>
  );
}

export default App;