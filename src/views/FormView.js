import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AchievementForm from '../components/forms/AchievementForm';
import GameForm from '../components/forms/GameForm';

export default function FormView({ uid, type }) {
  const { achievementKey } = useParams();

  const formType = () => {
    if (type === 'achievement') {
      return <AchievementForm uid={uid} achievementKey={achievementKey} />;
    }
    if (type === 'game') {
      return <GameForm uid={uid} />;
    }
    return '';
  };

  return <div>{formType()}</div>;
}

FormView.propTypes = {
  uid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
