import React from "react";
import PropTypes from "prop-types";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import s from './ContactList.module.css'

import ContactItem from "../ContactItem";

const itemMovie = {
  enter: s.enter,
  enterActive: s.enterActive,
  exit: s.exit,
  exitActive: s.exitActive
}

const ContactList = ({ contacts, onRemove }) => {
  // if (contacts.length === 0) return null;
  return (
    
    <TransitionGroup component='ul' className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <CSSTransition key={id}  timeout={250} classNames={itemMovie} unmountOnExit>
          <ContactItem  name={name} phone={phone} onRemove={() =>onRemove(id) }/>
        </CSSTransition>
      ))}
      </TransitionGroup>
      
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
  })), PropTypes.array,]),
  onRemove: PropTypes.func.isRequired
};

export default ContactList;
