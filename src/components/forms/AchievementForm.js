import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import getGames from '../../helpers/data/gamesData';
import {
  updateAchievement,
  createAchievement,
} from '../../helpers/data/achievementsData';

export default function AchievementForm({
  userId,
  setGames,
  setAchievements,
  data,
  games,
}) {
  const [achievement, setAchievement] = useState({
    name: data ? data.name : '',
    img: data ? data.img : '',
    description: data ? data.description : '',
    achieved: data ? data.achieved : false,
    gameKey: data ? data.gameKey : '',
    uid: userId,
    key: data ? data.key : null,
  });

  useEffect(() => getGames(userId).then(setGames), []);

  const handleInputChange = (e) => {
    setAchievement((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (achievement.firebaseKey) {
      updateAchievement(achievement).then(setAchievements);
    } else {
      createAchievement(achievement).then(setAchievements);
    }

    setAchievement({
      name: '',
      img: '',
      description: '',
      achieved: false,
      gameKey: '',
      uid: userId,
      key: null,
    });

    this.props.history.push('/');
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
          value={achievement.image}
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
          value={achievement.achieved}
          type='checkbox'
          name='achieved'
          id='achievementAchieved'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementGame'>Game</Label>
        <Input type='select' name='gameKey' id='game-select'>
          {games.map((game) => (
            <option onClick={handleInputChange} key={game.key}>{game.name}</option>
          ))}
        </Input>
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

AchievementForm.propTypes = {
  userId: PropTypes.string.isRequired,
  setGames: PropTypes.func.isRequired,
  setAchievements: PropTypes.func.isRequired,
  data: PropTypes.object,
  games: PropTypes.array.isRequired,
};
