import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateGame, createGame } from '../../helpers/data/gamesData';

export default function GameForm({ data, uid }) {
  const [game, setGame] = useState({
    name: data.name || '',
    img: data.img || '',
    uid,
    key: data.key || null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (game.key) {
      updateGame(game);
    } else {
      createGame(game);
    }

    setGame({
      name: '',
      img: '',
      uid,
      key: null,
    });
  };

  const handleInputChange = (e) => {
    setGame((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
      <FormGroup>
        <Label for='gameName'>Name</Label>
        <Input
          required
          value={game.name}
          type='text'
          name='name'
          id='gameName'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='achievementName'>Name</Label>
        <Input
          value={game.img}
          type='text'
          name='img'
          id='achievementName'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

GameForm.propTypes = {
  uid: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};