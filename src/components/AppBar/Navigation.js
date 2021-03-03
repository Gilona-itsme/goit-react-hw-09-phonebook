import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import style from './App.module.css';

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        exact
        to={routes}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      ></NavLink>
    </nav>
  );
};

export default Navigation;
