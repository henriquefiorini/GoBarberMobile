import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { UPDATE_PROFILE_REQUEST } from './actionTypes';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword && rest),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Profile updated', 'Profile updated successfully.');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Cannot update profile',
      'Cannot update profile information, please try again later.',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
