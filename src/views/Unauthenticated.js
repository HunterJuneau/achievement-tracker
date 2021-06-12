import React from 'react';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

export default function Unauthenticated() {
  return (
  <>
    <h1 className='mx-auto'>Achievement Tracker</h1>
    <Button onClick={signInUser} color='primary'>Log In</Button>
  </>
  );
}
