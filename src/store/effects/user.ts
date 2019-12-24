import network from '../../network';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersSuccess } from '../actions/user';
import { UsersTypes as UT } from '../../entities/user';

function* fetchUsersAsync() {
  try {
    const users = yield network.getUsers();
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure());
  }
}
export function* watchFetchUsers() {
  yield takeEvery(UT.FETCH_USERS, fetchUsersAsync);
}
