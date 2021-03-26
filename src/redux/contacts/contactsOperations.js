import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeContactSuccess,
  changeContactRequest,
  changeContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './contactsActions';

export const fetchContacts = () => dispatch => {
  dispatch(getContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error.message)));
};

export const addContact = ({ name, number }) => dispatch => {
  const item = {
    name,
    number,
  };

  dispatch(addContactRequest());
  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export const updateContact = (contactId, name, number) => dispatch => {
  dispatch(changeContactRequest());
  axios
    .patch(`/contacts/${contactId}`, { name, number })
    .then(({ data }) => dispatch(changeContactSuccess(data)))
    .catch(error => dispatch(changeContactError(error.message)));
};

//export default { addContact, deleteContact };
