import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import s from "./ContactList.module.css";

import contactsActions from "../redux/contactsActions";
import ContactItem from "../ContactItem";

const itemMovie = {
  enter: s.enter,
  enterActive: s.enterActive,
  exit: s.exit,
  exitActive: s.exitActive,
};

const ContactList = ({ contacts,  onRemove }) => {

  return (
    <TransitionGroup component="ul" in="true" className={s.list}>
    
      {contacts &&
        (contacts.map(({ id, name, phone }) => (
          <CSSTransition
            key={id}
            in={contacts.length > 0}
            timeout={250}
            classNames={itemMovie}
            unmountOnExit
          >
            <ContactItem
              name={name}
              phone={phone}
              onRemove={() => onRemove(id)}
            />
          </CSSTransition>
        ))) }
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
      })
    ),
    PropTypes.array,
  ]),
  onRemove: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
 const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchProps = (dispatch) => ({
  onRemove: (id) => dispatch(contactsActions.deleteContact(id)),
  onChangeFilter: (event) =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
