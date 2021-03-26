import React from 'react';
import PropTypes from 'prop-types';

import style from './IconButton.module.css';

const IconButton = ({ children, onClick, className, ...restProps }) => {
  const classList = [className, style.button].join(' ');
  return (
    <button className={classList} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.element,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
