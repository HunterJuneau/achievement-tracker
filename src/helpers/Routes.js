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
      <Component {...taco} uid={user.uid} />
    ) : (
      <Redirect to={{ pathname: '/unauthenticated', state: { from: taco.location } }} />
    )
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

export default function Routes({
  user,
  achievements,
  setAchievements,
  setGames,
  games,
}) {
  return (
    <>
      <Switch>
        <PrivateRoute
          exact
          path='/'
          user={user}
          component={() => (
            <Achievements
              achievements={achievements}
              setAchievements={setAchievements}
              setGames={setGames}
            />
          )}
        />
        <PrivateRoute
          path='/games'
          user={user}
          component={() => (
            <Games games={games} setGames={setGames} />
          )}
        />
        <PrivateRoute
          path='/form/:type/:key'
          user={user}
          component={() => (
            <FormView
              setAchievements={setAchievements}
              games={games}
            />
          )}
        />
        <Route
          path='/unauthenticated'
          component={() => <Unauthenticated user={user} />}
        />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  achievements: PropTypes.array.isRequired,
  setAchievements: PropTypes.func.isRequired,
  setGames: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
};
