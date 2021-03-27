import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeContactSuccess,
  changeContactRequest,
  changeContactError,
  setChangeContact,
  deleteContactSuccess,
  deleteContactError,
  deleteContactRequest,
  getContactRequest,
  getContactSuccess,
  getContactError,
  changeFilter,
} from './contactsActions';

const items = createReducer([], {
  [getContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [changeContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
  // [changeContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [changeContactSuccess]: () => false,
  [changeContactRequest]: () => true,
  [changeContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(false, {
  [getContactRequest]: () => false,
  [getContactSuccess]: () => false,
  [getContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: (_, { payload }) => payload,
  [changeContactSuccess]: () => false,
  [changeContactRequest]: () => false,
  [changeContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const changeContact = createReducer(null, {
  [setChangeContact]: (_, { payload }) => payload,
  [changeContactSuccess]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
  changeContact,
});
