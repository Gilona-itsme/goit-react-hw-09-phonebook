import React from "react";
import PropTypes from "prop-types";
//import { v4 as uuidv4 } from "uuid";

import s from './ContactList.module.scss'

import ContactItem from "../ContactItem";



const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} name={name} phone={phone} onRemove={() =>onRemove(id) }/>
      ))}
    </ul>
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
