import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import routes from '../../routes';

import style from './AppBar.module.css';

export default function AuthNav() {
  useSelector(getIsAuthenticated);

  return (
    <div className={style.AuthForm}>
      <NavLink
        to={routes.REGISTRATION}
        exact
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Sing up
      </NavLink>
      <NavLink
        to={routes.LOGIN}
        exact
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Sing in
      </NavLink>
    </div>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AuthNav);
