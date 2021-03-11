import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialeUserState = { name: null, email: null };

const user = createReducer(initialeUserState, {
  [authActions.registerRequest]: (_, { payload }) => payload.user,
  [authActions.loginRequest]: (_, { payload }) => payload.user,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
