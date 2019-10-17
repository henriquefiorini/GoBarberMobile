import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from './actionTypes';
import { signInSuccess, authFailure } from './actions';

import { Api } from '~/services';

export function setAuthorizationHeader({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    Api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(Api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    if (user.provider) {
      Alert.alert(
        'Invalid credentials',
        'If you are a provider, please sign in our web platform.',
      );
      yield put(authFailure());
      return;
    }

    Api.defaults.headers.authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Authentication problem',
      'Authentication failed, please check your credentials.',
    );
    yield put(authFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(Api.post, 'users', {
      name,
      email,
      password,
    });
    // history.push('/');
  } catch (err) {
    Alert.alert('Register failed', 'Something went wrong, please try again.');
    yield put(authFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthorizationHeader),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);
