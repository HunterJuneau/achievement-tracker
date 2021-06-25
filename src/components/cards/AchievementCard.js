import React from 'react';
import PropTypes from 'prop-types';

export default function AchievementCard({
  achieved, img, name, description
}) {
  return (
      <tr>
        <th scope='row'>
          {img ? <img height='30px' src={img} alt={name} /> : ''}
        </th>
        <th>{name}</th>
        <th>{description}</th>
        <th>{achieved ? 'Yes' : 'No'}</th>
      </tr>
  );
}

AchievementCard.propTypes = {
  achieved: PropTypes.bool,
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};
