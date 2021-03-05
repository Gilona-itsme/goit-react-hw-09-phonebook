import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import PhoneBookView from '../Views/PhoneBookView';

import Container from './UI/Container';
// import AppBar from './AppBar';

const App = () => {
  return (
    <Container title="Phonebook">
      {/* <AppBar /> */}

      <Switch>
        {/* {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))} */}

        <Route path={routes.contacts}>
          <PhoneBookView />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
