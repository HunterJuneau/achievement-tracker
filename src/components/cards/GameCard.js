import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

export default function GameCard({ name, img }) {
  return (
    <Card className='game-card'>
      <CardBody>
        <CardTitle tag='h5'>{name}</CardTitle>
      </CardBody>
      <img width='100%' src={img} alt={name} />
    </Card>
  );
}

GameCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};
