import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        console.warn(authed);
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
      <Routes
        user={user}
        games={games}
        setGames={setGames}
        achievements={achievements}
        setAchievements={setAchievements}
      />
    </BrowserRouter>
  );
}

export default App;
