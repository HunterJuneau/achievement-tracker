import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AchievementForm from '../components/forms/AchievementForm';
import { getSingleAchievement } from '../helpers/data/achievementsData';

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
        return (
          <AchievementForm
            uid={uid}
            name={data.name}
            img={data.img}
            description={data.description}
            achieved={data.achieved}
            gameKey={data.gameKey}
            firebaseKey={data.key}
          />
        );
      case 'game':
        return console.warn('Game Form WIP');
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
