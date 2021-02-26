import { ADD, DELETE, CHANGE_FILTER } from './contactsTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, phone }) => ({
  type: ADD,
  payload: { id: uuidv4(), name, phone },
});

const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
