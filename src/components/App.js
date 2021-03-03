import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import PhoneBook from '../Views/PhoneBook';
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
          <PhoneBook />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
