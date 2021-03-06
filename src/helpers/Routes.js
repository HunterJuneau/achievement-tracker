import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Achievements from '../views/Achievements';
import Games from '../views/Games';
import FormView from '../views/FormView';
import Unauthenticated from '../views/Unauthenticated';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (
    user ? (
      <Component {...taco} user={user} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
    )
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

export default function Routes({ user }) {
  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          path='/achievements'
          user={user}
          component={() => <Achievements uid={user.uid} />}
        />
        <PrivateRoute
          path='/achievements/new'
          user={user}
          component={() => (
            <FormView uid={user.uid} type='achievement' />
          )}
        />
        <PrivateRoute
          path='/achievements/edit/:dataKey'
          user={user}
          component={() => <FormView uid={user.uid} type='achievement' />}
        />
        <PrivateRoute
        exact
          path='/games'
          user={user}
          component={() => <Games uid={user.uid} />}
        />
        <PrivateRoute
          path='/games/new'
          user={user}
          component={() => (
            <FormView uid={user.uid} type='game' />
          )}
        />
        <PrivateRoute
          path='/games/edit/:dataKey'
          user={user}
          component={() => <FormView uid={user.uid} type='game' />}
        />
        <Route
          exact
          path='/'
          component={() => <Unauthenticated user={user} />}
        />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};
