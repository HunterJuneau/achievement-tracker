import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getGames } from '../helpers/data/gamesData';
import GameCard from '../components/cards/GameCard';

export default function Games({ uid }) {
  const [games, setGames] = useState([]);

  useEffect(() => getGames(uid).then(setGames), []);

  return (
    <div className='m-5' id='games'>
      <h2>Your Games</h2>
      <Link to='/games/new'>Add Game</Link>
      <div className='game-container d-flex flex-flow justify-content-around mx-5 my-3'>
        {games.map((game) => (
          <GameCard
            key={game.key}
            firebaseKey={game.key}
            uid={uid}
            setGames={setGames}
            img={game.img}
            name={game.name}
          />
        ))}
      </div>
    </div>
  );
}

Games.propTypes = {
  uid: PropTypes.string,
  setGames: PropTypes.func,
  games: PropTypes.array,
};
