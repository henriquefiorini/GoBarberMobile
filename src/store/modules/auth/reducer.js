import produce from 'immer';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  AUTH_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_OUT,
} from './actionTypes';

const initialState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        draft.isLoading = false;
        break;
      }

      case SIGN_UP_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case AUTH_FAILURE: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = false;
        break;
      }

      case SIGN_OUT: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = false;
        break;
      }

      default:
        break;
    }
  });
}
