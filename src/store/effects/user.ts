import network from 'network';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchUsers, UsersTypes as UT } from '../actions/user';

function* fetchUsersAsync() {
  try {
    const users = yield network.getUsers();
    yield put(fetchUsers.success(users));
  } catch (error) {
    yield put(fetchUsers.failure(error));
  }
}
export function* watchFetchUsers() {
  yield takeEvery(fetchUsers.request, fetchUsersAsync);
}
