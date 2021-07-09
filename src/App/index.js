import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';
import { checkIn } from '../helpers/data/linkData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        checkIn(authed.uid).then((response) => {
          setUser({
            fullName: authed.displayName,
            steam: response.steam,
            linkKey: response.key,
            uid: authed.uid,
          });
        });
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {user && <NavBar user={user} setUser={setUser} />}
      <Routes user={user} />
    </BrowserRouter>
  );
}

export default App;
