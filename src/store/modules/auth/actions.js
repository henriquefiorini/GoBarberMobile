import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  AUTH_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_OUT,
} from './actionTypes';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
      user,
    },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  };
}

export function authFailure() {
  return {
    type: AUTH_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
