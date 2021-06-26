import React from 'react';
import PropTypes from 'prop-types';
import GameCard from '../cards/GameCard';

export default function SteamGames({ games }) {
  return (
    <div className='m-5' id='steamGames'>
      <h2>Your Steam Games</h2>
      <div className='game-container d-flex flex-flow justify-content-around mx-5 my-3'>
        {games.map((game) => (
          <GameCard
            key={game.appid}
            img={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}
            name={game.name}
          />
        ))}
      </div>
    </div>
  );
}

SteamGames.propTypes = {
  games: PropTypes.array,
};
