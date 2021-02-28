import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/Add', ({ name, phone }) => {
  return {
    payload: { id: uuidv4(), name, phone },
  };
});
const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;

// ** Without Toolkit**//

// const addContact = ({ name, phone }) => ({
//   type: ADD,
//   payload: { id: uuidv4(), name, phone },
// });
// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });
// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
