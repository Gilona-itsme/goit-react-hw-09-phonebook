import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import s from './ContactList.module.css';

import ContactItem from '../ContactItem';
import CounterContacts from '../CounterContacts';

const itemMovie = {
  enter: s.enter,
  enterActive: s.enterActive,
  exit: s.exit,
  exitActive: s.exitActive,
};

const ContactList = ({ contacts, onRemove, total }) => {
  return (
    <TransitionGroup component="ul" in="true" className={s.list}>
      <CounterContacts total={total} />
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            in={contacts.length > 0}
            timeout={250}
            classNames={itemMovie}
            unmountOnExit
          >
            <ContactItem
              name={name}
              number={number}
              onRemove={() => onRemove(id)}
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
