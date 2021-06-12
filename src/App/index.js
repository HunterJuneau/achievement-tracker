import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
