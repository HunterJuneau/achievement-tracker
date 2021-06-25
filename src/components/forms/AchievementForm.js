import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import getGames from '../../helpers/data/gamesData';
import {
  updateAchievement,
  createAchievement,
} from '../../helpers/data/achievementsData';

export default function AchievementForm({ userId, data }) {
  const [achievement, setAchievement] = useState({
    name: data.name || '',
    img: data.img || '',
    description: data.description || '',
    achieved: data.achieved || false,
    gameKey: data.gameKey || '',
    uid: userId,
    key: data.key || null,
  });

  const [games, setGames] = useState([]);

  useEffect(() => getGames(userId).then(setGames), []);

  const handleInputChange = (e) => {
    setAchievement((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'achieved' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (achievement.firebaseKey) {
      updateAchievement(achievement);
    } else {
      createAchievement(achievement);
    }

    <Redirect to='/achievements' />;
  };

  return (
    <Form onSubmit={handleSubmit} className='w-75 mx-auto' id='form'>
      <FormGroup>
        <Label for='achievementName'>Name</Label>
        <Input
          required
          value={achievement.name}
          type='text'
          name='name'
          id='achievementName'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementImg'>Image URL</Label>
        <Input
          value={achievement.img}
          type='url'
          name='img'
          id='achievementImg'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementDesc'>Description</Label>
        <Input
          value={achievement.description}
          type='textarea'
          name='description'
          id='achievementDesc'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementAchieved'>Achieved?</Label>
        <Input
          checked={achievement.achieved}
          type='checkbox'
          name='achieved'
          id='achievementAchieved'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementGame'>Game</Label>
        <Input onChange={handleInputChange} type='select' value={achievement.gameKey} name='gameKey' id='game-select'>
          <option value='' disabled hidden>Select Game</option>
          {games.map((game) => (
            <option value={game.key} key={game.key}>
              {game.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

AchievementForm.propTypes = {
  userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};