import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AchievementForm from '../components/forms/AchievementForm';

export default function FormView({ uid, type }) {
  const { achievementKey } = useParams();

  const formType = () => {
    if (type === 'achievement') {
      return <AchievementForm uid={uid} achievementKey={achievementKey} />;
    }
    return '';
  };

  return <div>{formType()}</div>;
}

FormView.propTypes = {
  uid: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
