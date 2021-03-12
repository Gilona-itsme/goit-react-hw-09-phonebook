import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const styles = {
  container: {
    textAlign: 'center',
  },
  status: { fontSize: 96, marginBottom: 16 },
  navLink: { textDecoration: 'underline', fontWeight: 500 },
};

const NotFoundView = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>

    <p>
      Oops, it seems, you are lost. There`s{' '}
      <NavLink style={styles.navLink} to={routes.MAIN}>
        a link
      </NavLink>{' '}
      to the Home Page
    </p>
  </div>
);

export default NotFoundView;
