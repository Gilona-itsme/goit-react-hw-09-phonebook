import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getError = state => state.contacts.error;

export const getContacts = state => state.contacts.items;

export const getChangeContact = state => state.contacts.changeContact;

export const getContactsLength = state => {
  const contacts = getContacts(state);
  return contacts.length;
};

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
