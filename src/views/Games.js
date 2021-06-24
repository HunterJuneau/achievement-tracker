import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getGames from '../helpers/data/gamesData';
import GameCard from '../components/cards/GameCard';

export default function Games({ uid }) {
  const [games, setGames] = useState([]);

  useEffect(() => getGames(uid).then(setGames), []);

  return (
    <div className='m-5' id='games'>
      <h2>Your Games</h2>
      <div className='game-container d-flex flex-flow justify-content-around mx-5 my-3'>
        {games.map((game) => (
          <GameCard img={game.img} key={game.key} name={game.name} />
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
