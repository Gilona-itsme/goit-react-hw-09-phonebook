import React from 'react';
//import { Route, Switch } from 'react-router-dom';

import Routes from '../routes';
//import PhoneBookView from '../Views/PhoneBookView';

import Container from './UI/Container';
import AppBar from './AppBar';

const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes />
    </Container>
  );
};

export default App;
