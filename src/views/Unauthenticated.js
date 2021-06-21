import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser } from '../helpers/auth';

export default function Unauthenticated({ user }) {
  console.warn(user);
  return (
    <>
      <h1 className='mx-auto'>Achievement Tracker</h1>
      {user ? (
        ''
      ) : (
        <Button onClick={signInUser} color='primary'>
          Log In
        </Button>
      )}
    </>
  );
}

Unauthenticated.propTypes = {
  user: PropTypes.any,
};
