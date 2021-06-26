import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { deleteAchievement } from '../../helpers/data/achievementsData';

export default function AchievementCard({
  achieved,
  img,
  name,
  description,
  firebaseKey,
  uid,
  setAchievements,
  compare,
}) {
  return (
    <tr>
      <th scope='row'>
        {img ? <img height='30px' src={img} alt={name} /> : ''}
      </th>
      <th>{name}</th>
      <th>{description}</th>
      <th>{achieved ? 'Yes' : 'No'}</th>
      <th>
        <Button
          color='danger'
          onClick={() => (
            deleteAchievement(firebaseKey, uid).then((response) => (
              setAchievements(response.sort(compare))
            ))
          )}
        >
          Delete
        </Button>
      </th>
    </tr>
  );
}

AchievementCard.propTypes = {
  achieved: PropTypes.bool.isRequired,
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  firebaseKey: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  setAchievements: PropTypes.func.isRequired,
  compare: PropTypes.func.isRequired,
};
