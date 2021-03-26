import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import style from './AppBar.module.css';
import Button from '../UI/Button';
import defaultAvatar from './iconUser.png';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={style}
      unmountOnExit
    >
      <div className={style.AuthForm}>
        <img
          src={defaultAvatar}
          alt={name}
          width="32"
          className={style.Avatar}
        />
        <span className={style.UserName}>Hi, {name} </span>
        <Button type="button" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </CSSTransition>
  );
}

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <CSSTransition
//     in={true}
//     appear={true}
//     timeout={500}
//     classNames={style}
//     unmountOnExit
//   >
//     <div className={style.AuthForm}>
//       <img src={defaultAvatar} alt={name} width="32" className={style.Avatar} />
//       <span className={style.UserName}>Hi, {name} </span>
//       <Button type="button" onClick={onLogout}>
//         Logout
//       </Button>
//     </div>
//   </CSSTransition>
// );

// const mapStateToProps = state => ({
//   name: getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
