import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

import style from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames={style}
    unmountOnExit
  >
    {stage => {
      return (
        <header className={style.AppBar}>
          <CSSTransition
            in={stage === 'entered'}
            timeout={500}
            classNames={style}
            unmountOnExit
          >
            <Navigation />
          </CSSTransition>

          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
      );
    }}
  </CSSTransition>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
