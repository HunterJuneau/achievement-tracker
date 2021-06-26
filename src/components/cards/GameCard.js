import React from 'react';
import {
  Card, CardBody, CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteGame } from '../../helpers/data/gamesData';

export default function GameCard({
  firebaseKey, uid, setGames, name, img, steam
}) {
  const handleDelete = () => {
    deleteGame(firebaseKey, uid).then(setGames);
  };

  return (
    <Card className='game-card'>
      <CardBody>
        <CardTitle tag='h5'>{name}</CardTitle>
      </CardBody>
      <img width='100%' src={img} alt={name} />
      {steam ? '' : <CardBody><Button color='danger' onClick={handleDelete}>Delete</Button></CardBody>}
    </Card>
  );
}

GameCard.propTypes = {
  setGames: PropTypes.func,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  steam: PropTypes.bool,
};
