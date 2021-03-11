import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import style from './Container.module.css';

const Container = ({ title, children }) => {
  return (
    <div className={style.container}>
      <CSSTransition
        in={title > 0}
        appear
        timeout={500}
        classNames={style}
        unmountOnExit
      >
        <h2 className={style.title}>{title}</h2>
      </CSSTransition>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
