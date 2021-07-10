import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { getAchievements } from '../helpers/data/achievementsData';
import AchievementCard from '../components/cards/AchievementCard';

export default function Achievements({ uid }) {
  const [achievements, setAchievements] = useState([]);

  const compare = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  useEffect(() => {
    getAchievements(uid).then((response) => (
      setAchievements(response.sort(compare))
    ));
  }, []);

  return (
    <div className='mx-auto my-3' id='achievements'>
      <h1>Achievements</h1>
      <Link to='/achievements/new' className='link'>Add Achievement</Link>
      <Table bordered className='my-4' id='achievementsTable'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Achieved?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {achievements
            .map((achievement) => (
              <AchievementCard
                key={achievement.key}
                achieved={achievement.achieved}
                description={achievement.description}
                img={achievement.img}
                name={achievement.name}
                firebaseKey={achievement.key}
                uid={uid}
                setAchievements={setAchievements}
                compare={compare}
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
