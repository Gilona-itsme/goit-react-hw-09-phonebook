import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

import style from './AppBar.module.css';
import { connect } from 'react-redux';

const AppBar = ({ isAuthenticated }) => (
  <header className={style.AppBar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
