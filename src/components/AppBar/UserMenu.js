import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import style from './AppBar.module.css';
import Button from '../UI/Button';
import defaultAvatar from './iconUser.png';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = ({ avatar, name, onLogout }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames={style}
    unmountOnExit
  >
    <div className={style.AuthForm}>
      <img src={defaultAvatar} alt={name} width="32" className={style.Avatar} />
      <span className={style.UserName}>Hi, {name} </span>
      <Button type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  </CSSTransition>
);

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
