import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getOwnedGames } from '../helpers/data/steamData';
import SteamGames from '../components/steamViews/SteamGames';
import SteamAchievements from '../components/steamViews/SteamAchievements';

export default function SteamView({ user, view }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getOwnedGames(user.steam).then(setGames);
  }, []);

  const getView = () => {
    if (view === 'games') {
      return <SteamGames games={games} />;
    }
    if (view === 'achievements') {
      return <SteamAchievements games={games} />;
    }
    return 'ERROR';
  };

  return <>{getView()}</>;
}

SteamView.propTypes = {
  user: PropTypes.any.isRequired,
  view: PropTypes.string.isRequired,
};
