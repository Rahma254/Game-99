import React from 'react';
import '../styles/GameCollection.css';

const games = [
  { id: 'contra', title: 'Contra', year: 1987, image: 'https://via.placeholder.com/300x200.png?text=Contra' },
  { id: 'metal-slug', title: 'Metal Slug', year: 1996, image: 'https://via.placeholder.com/300x200.png?text=Metal+Slug' },
  { id: 'street-fighter', title: 'Street Fighter II', year: 1991, image: 'https://via.placeholder.com/300x200.png?text=Street+Fighter+II' }
];

const GameCollection = () => {
  return (
    <section id="games" className="game-collection">
      <h2 className="collection-title">Koleksi Game Klasik</h2>
      <div className="collection-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-card-image" />
            <div className="game-card-info">
              <h3>{game.title}</h3>
              <p>{game.year}</p>
              <button className="play-button">Mainkan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameCollection;
