import React from 'react';
import PropTypes from 'prop-types';

import PrimeryButton from '../UI/Button';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onRemove }) => {
  return (
    <li className={s.item}>
      <p className={s.contact}>
        <span className={s.name}>{name}</span>:
        <span className={s.phone}>{number}</span>
        <PrimeryButton className={s.button} type="button" onClick={onRemove}>
          Delete
        </PrimeryButton>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactItem;
