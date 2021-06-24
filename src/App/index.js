import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Routes user={user} />
    </BrowserRouter>
  );
}

export default App;
