import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AchievementForm from '../components/forms/AchievementForm';
import { getSingleAchievement } from '../helpers/data/achievementsData';

export default function FormView({
  uid, setGames, setAchievements, games
}) {
  const { type } = useParams();
  const { key } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getSingleAchievement(key).then(setData);
  }, []);

  const formType = () => {
    switch (type) {
      case 'Achievement':
        return (
          <AchievementForm
            userId={uid}
            setGames={setGames}
            setAchievements={setAchievements}
            data={data}
            games={games}
          />
        );
      case 'Game':
        return console.warn('Game Form WIP');
      default:
        return console.error('Wrong Form Type');
    }
  };

  return <div>{formType()}</div>;
}

FormView.propTypes = {
  uid: PropTypes.string.isRequired,
  setGames: PropTypes.func.isRequired,
  setAchievements: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
};
