import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import PhoneBook from '../Views/PhoneBook';

const App = () => {
  return (
    <Switch>
      {/* {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))} */}

      <Route path={routes.contacts}>
        <PhoneBook />
      </Route>
    </Switch>
  );
};

export default App;
