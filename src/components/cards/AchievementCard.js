import React from 'react';
import PropTypes from 'prop-types';

export default function AchievementCard({
  achieved, img, name, description
}) {
  return (
      <tr>
        <th scope='row'>
          <img height='30px' src={img} alt={name} />
        </th>
        <th>{name}</th>
        <th>{description}</th>
        <th>{achieved ? 'Yes' : 'No'}</th>
      </tr>
  );
}

AchievementCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  achieved: PropTypes.bool,
};
