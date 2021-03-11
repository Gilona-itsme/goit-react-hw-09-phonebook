import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './Views/HomeView';
import PhoneBookView from './Views/PhoneBookView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';

export const paths = {
  MAIN: '/',
  REGISTRATION: '/register',
  LOGIN: '/login',
  CONTACTS: '/contacts/',
  // CONTACTS: id => `/contacts/${id}`,
};

// const routes = [
//   {
//     path: '/',
//     label: 'home',
//     exact: true,
//     component: HomeView,
//   },
//   {
//     path: '/contacts',
//     label: 'contacts',
//     // exact: true,
//     component: PhoneBookView,
//   },
// ];

const Routes = () => {
  return (
    <Switch>
      <Route path={paths.MAIN} exact component={HomeView} />
      <Route path={paths.REGISTRATION} component={RegisterView} />
      {/* <Route
        path={paths.LOGIN}
        render={props => {
          return <LoginView {...props} extraPropName="value" />;
        }}
      /> */}

      <Route path={paths.LOGIN} component={LoginView} />
      <Route path={paths.CONTACTS} component={PhoneBookView} />
      {/* <Route path={paths.CONTACTS(':id')} component={PhoneBookView} /> */}
    </Switch>
  );
};

export default Routes;
