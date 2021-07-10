import React, { useState, useEffect } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getSingleGame, updateGame, createGame } from '../../helpers/data/gamesData';

export default function GameForm({ uid, gameKey }) {
  const [game, setGame] = useState({
    name: '',
    img: '',
    uid,
    key: null,
  });

  useEffect(() => {
    if (gameKey) {
      getSingleGame(gameKey).then((response) => {
        setGame({
          name: response.name,
          img: response.img,
          uid,
          key: response.key,
        });
      });
    }
  }, []);

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
    <Form onSubmit={handleSubmit} className='w-75 mx-auto mt-5 game-form'>
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
      <FormGroup className='mt-5'>
        <Label for='achievementName'>Image URL</Label>
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
  gameKey: PropTypes.string,
};
