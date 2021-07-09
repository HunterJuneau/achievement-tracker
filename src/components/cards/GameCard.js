import React from 'react';
import {
  Card, CardBody, CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteGame } from '../../helpers/data/gamesData';

export default function GameCard({
  firebaseKey, uid, setGames, name, img
}) {
  const handleDelete = () => {
    deleteGame(firebaseKey, uid).then(setGames);
  };

  return (
    <Card className='game-card'>
      <CardBody>
        <CardTitle tag='h5'>{name}</CardTitle>
      </CardBody>
      {img ? <img width='100%' src={img} alt={name} /> : ''}
      <CardBody>
        <Button color='danger' onClick={handleDelete}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

GameCard.propTypes = {
  setGames: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};
