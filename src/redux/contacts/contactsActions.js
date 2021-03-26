import { createAction } from '@reduxjs/toolkit';

export const getContactRequest = createAction('contacts/getContactRequest');
export const getContactSuccess = createAction('contacts/getContactSuccess');
export const getContactError = createAction('contacts/getContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const changeContactRequest = createAction(
  'contacts/changeContactRequest',
);
export const changeContactSuccess = createAction(
  'contacts/changeContactSuccess',
);
export const changeContactError = createAction('contacts/changeContactError');

export const setChangeContact = createAction('contacts/setChangeContact');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
