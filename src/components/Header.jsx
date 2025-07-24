import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000); // Notifikasi akan hilang setelah 5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      {showNotification && (
        <div className="notification-bar">
          Selamat Datang di Nabila Gaming Studio Development!
        </div>
      )}
      <div className="main-header">
        <div className="logo">
          <h1>Nabila Gaming Studio</h1>
          <p>Development</p>
        </div>
        <nav className="navigation">
          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#games">Koleksi Game</a>
              <ul className="dropdown-menu">
                <li><a href="#sunset-riders">Sunset Riders</a></li>
                <li><a href="#contra">Contra</a></li>
                <li><a href="#metal-slug">Metal Slug</a></li>
              </ul>
            </li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </div>
      <div className="toolbar">
        <button className="toolbar-button">Login</button>
        <button className="toolbar-button">Register</button>
        <input type="text" placeholder="Cari game..." className="search-bar" />
      </div>
    </header>
  );
};

export default Header;
