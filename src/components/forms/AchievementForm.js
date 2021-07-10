import React, { useState, useEffect } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getGames } from '../../helpers/data/gamesData';
import {
  getSingleAchievement,
  updateAchievement,
  createAchievement,
} from '../../helpers/data/achievementsData';

export default function AchievementForm({
  uid,
  achievementKey,
}) {
  const [achievement, setAchievement] = useState({
    name: '',
    img: '',
    description: '',
    achieved: false,
    gameKey: '',
    uid,
    key: null,
  });
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames(uid).then(setGames);

    if (achievementKey) {
      getSingleAchievement(achievementKey).then((response) => {
        setAchievement({
          name: response.name,
          img: response.img,
          description: response.description,
          achieved: response.achieved,
          gameKey: response.gameKey,
          uid,
          key: response.key,
        });
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setAchievement((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'achieved' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (achievement.key) {
      updateAchievement(achievement);
    } else {
      createAchievement(achievement);
    }

    setAchievement({
      name: '',
      img: '',
      description: '',
      achieved: false,
      gameKey: '',
      uid,
      key: null,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className=' mx-auto' id='form'>
      <FormGroup>
        <Label for='achievementName'>Name</Label>
        <Input
          required
          value={achievement.name}
          type='text'
          name='name'
          className='w-75 mx-auto'
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
          className='w-75 mx-auto'
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
          className='w-75 mx-auto'
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
          className='mx-auto w-100'
          id='achievementAchieved'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup className='mt-5'>
        <Label for='achievementGame'>Game</Label>
        <Input
          onChange={handleInputChange}
          type='select'
          value={achievement.gameKey}
          name='gameKey'
          className='w-75 mx-auto'
          id='game-select'
        >
          <option value='' disabled hidden>
            Select Game
          </option>
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
  uid: PropTypes.string.isRequired,
  achievementKey: PropTypes.string,
};
