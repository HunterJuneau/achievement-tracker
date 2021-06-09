import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Unauthenticated from '../views/Unauthenticated';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path='/' component={Unauthenticated} />
      </Switch>
    </>
  );
}
