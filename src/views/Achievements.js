import React, { useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { getAchievements } from '../helpers/data/achievementsData';
import getGames from '../helpers/data/gamesData';
import AchievementCard from '../components/cards/AchievementCard';

export default function Achievements({
  uid,
  setAchievements,
  setGames,
  achievements,
}) {
  useEffect(() => getAchievements(uid).then(setAchievements), []);
  useEffect(() => getGames(uid).then(setGames), []);

  return (
    <div className='mx-auto my-3' id='achievements'>
      <h1>Achievements</h1>
      <a href='/form/Achievement/null'>
        <Button>Add Achievement</Button>
      </a>
      <Table bordered className='my-4' id='achievementsTable'>
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
  uid: PropTypes.any.isRequired,
  setAchievements: PropTypes.func.isRequired,
  setGames: PropTypes.func.isRequired,
  achievements: PropTypes.array.isRequired,
};
