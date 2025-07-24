import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="game-container">
        <h2 className="game-title">Sunset Riders - Classic 1991</h2>
        <div className="game-frame-wrapper">
          <iframe
            src="https://www.retrogames.cc/embed/21439-sunset-riders-4-player-version-ua.html"
            width="800"
            height="600"
            frameBorder="no"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            scrolling="no"
          ></iframe>
        </div>
        <div className="game-controls-info">
          <p><strong>Kontrol:</strong> Gunakan tombol panah untuk bergerak, 'S' untuk menembak, dan 'X' untuk melompat. 'Enter' untuk memulai.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
