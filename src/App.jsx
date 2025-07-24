import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameCollection from './components/GameCollection';
import SeoInfo from './components/SeoInfo';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <GameCollection />
        <SeoInfo />
      </main>
      <footer className="footer">
        <p>© 2025 Nabila Gaming Studio Development. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
