import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';

import style from './AppBar.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <nav className={style.NavForm}>
      <NavLink
        exact
        to={routes.MAIN}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to={routes.CONTACTS}
          className={style.NavLink}
          activeClassName={style.NavLink_active}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

// const Navigation = ({ isAuthenticated }) => {
//   return (
//     <nav className={style.NavForm}>
//       <NavLink
//         exact
//         to={routes.MAIN}
//         className={style.NavLink}
//         activeClassName={style.NavLink_active}
//       >
//         Home
//       </NavLink>

//       {isAuthenticated && (
//         <NavLink
//           to={routes.CONTACTS}
//           className={style.NavLink}
//           activeClassName={style.NavLink_active}
//         >
//           Phonebook
//         </NavLink>
//       )}
//     </nav>
//   );
// };

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
