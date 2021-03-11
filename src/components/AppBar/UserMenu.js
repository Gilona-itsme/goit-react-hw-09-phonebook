import React from 'react';
import PropTypes from 'prop-types';

import style from './AppBar.module.css';
import Button from '../UI/Button';
import defaultAvatar from './iconUser.png';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.AuthForm}>
    <img src={defaultAvatar} alt={name} width="32" className={avatar} />
    <span>Wellcome, {name} </span>
    <Button type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  name: getUsername(state),
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(UserMenu);
