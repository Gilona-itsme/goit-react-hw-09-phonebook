import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

// const logoutRequest = createAction('auth/logoutRequest');
// const logoutSuccess = createAction('auth/logoutSuccess');
// const logoutError = createAction('auth/logoutError');

// const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
// const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
// const getCurrentUserError = createAction('auth/getCurrentUserError');

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
};

export default authActions;
