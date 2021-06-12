import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Unauthenticated from '../views/Unauthenticated';

export default function Routes({ user }) {
  return (
    <>
      <Switch>
        {user ? '' : <Route path='/' component={Unauthenticated} />}
      </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};
