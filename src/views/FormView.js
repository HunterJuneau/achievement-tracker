import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AchievementForm from '../components/forms/AchievementForm';
import { getSingleAchievement } from '../helpers/data/achievementsData';
import GameForm from '../components/forms/GameForm';

export default function FormView({ uid, purpose, type }) {
  const { key } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (purpose === 'update' && type === 'achievement') {
      getSingleAchievement(key).then(setData);
    }
  }, []);

  const formType = () => {
    switch (type) {
      case 'achievement':
        return <AchievementForm userId={uid} data={data} />;
      case 'game':
        return <GameForm uid={uid} data={data} />;
      default:
        return console.error('Wrong Form Type');
    }
  };

  return <div>{formType()}</div>;
}

FormView.propTypes = {
  uid: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
