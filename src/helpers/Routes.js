import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Games from '../views/Games';
import Unauthenticated from '../views/Unauthenticated';
import Achievements from '../views/Achievements';

export default function Routes({ user }) {
  const [achievements, setAchievements] = useState([]);
  const [games, setGames] = useState([]);

  return (
    <>
      <Switch>
        {user ? (
          <>
            <Route
              exact
              path='/'
              component={() => (
                <Achievements
                  uid={user.uid}
                  achievements={achievements}
                  setAchievements={setAchievements}
                />
              )}
            />
            <Route
              path='/games'
              component={() => (
                <Games uid={user.uid} games={games} setGames={setGames} />
              )}
            />
          </>
        ) : (
          <Route path='/' component={Unauthenticated} />
        )}
      </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};
