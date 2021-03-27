import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import s from './ContactList.module.css';
import ContactItem from '../ContactItem';

import { deleteContact, getVisibleContacts } from '../../redux/contacts';

const itemMovie = {
  enter: s.enter,
  enterActive: s.enterActive,
  exit: s.exit,
  exitActive: s.exitActive,
};

export default function ContactList({ name }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  // const isLoadingContacts = true;
  const onRemove = useCallback(
    id => {
      dispatch(deleteContact(id));
      toast.info(`The contact ${name} was removed`);
    },
    [dispatch, name],
  );

  return (
    <TransitionGroup component="ul" in="true" className={s.list}>
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
              ContactId={id}
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
}

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
  onRemove: PropTypes.func,
};
