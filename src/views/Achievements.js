import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { getAchievements } from '../helpers/data/achievementsData';
import AchievementCard from '../components/cards/AchievementCard';

export default function Achievements({ uid }) {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    getAchievements(uid).then(setAchievements);
  }, []);

  return (
    <div className='mx-auto my-3' id='achievements'>
      <h1>Achievements</h1>
      <Link to='/achievements/new'>Add Achievement</Link>
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
};
