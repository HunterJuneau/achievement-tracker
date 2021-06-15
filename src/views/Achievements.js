import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import getAchievements from '../helpers/data/achievementsData';
import AchievementCard from '../components/cards/AchievementCard';

export default function Achievements({ uid, setAchievements, achievements }) {
  useEffect(
    () => getAchievements(uid).then((response) => setAchievements(response)),
    [],
  );

  return (
    <div id='achievements'>
      <h2>ACHIEVEMENTS</h2>
      <Table bordered id='achievementsTable'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Achieved?</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((achievement) => (
            <AchievementCard
              achieved={achievement.achieved}
              description={achievement.description}
              img={achievement.img}
              key={achievement.key}
              name={achievement.name}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

Achievements.propTypes = {
  uid: PropTypes.string,
  setAchievements: PropTypes.func,
  achievements: PropTypes.array,
};
