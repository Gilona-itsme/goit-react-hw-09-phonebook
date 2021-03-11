import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Routes from '../../routes';

import style from './AppBar.module.css';

export default function AuthNav() {
  return (
    <div className={style.AuthForm}>
      <NavLink
        to={Routes.paths.REGISTRATION}
        exact
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Sing up
      </NavLink>
      <NavLink
        to={Routes.paths.LOGIN}
        exact
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Sing in
      </NavLink>
    </div>
  );
}
