import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser } from '../helpers/auth';

export default function Unauthenticated({ user }) {
  useEffect(() => {
    <Redirect to='/' />;
  }, [user]);

  return (
    <div id='unauthenticatedContainer'>
      <h1 className='mx-auto'>Achievement Tracker</h1>
      <img src='https://image.flaticon.com/icons/png/512/60/60778.png' alt='Check Mark Logo' className='mx-auto my-5 home-logo' />
      {user ? (
        ''
      ) : (
        <Button onClick={signInUser} color='primary'>
          Log In
        </Button>
      )}
    </div>
  );
}

Unauthenticated.propTypes = {
  user: PropTypes.any,
};
