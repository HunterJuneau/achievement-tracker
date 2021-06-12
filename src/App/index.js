import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        console.warn(authed);
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes setUser={setUser} />
    </BrowserRouter>
  );
}

export default App;
