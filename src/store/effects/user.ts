import newtwork from 'network';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchUsers } from '../actions/user';

function* fetchUsersAsync() {
  try {
    const users = yield newtwork.getUsers();
    yield put(fetchUsers.success(users));
  } catch (error) {
    yield put(fetchUsers.failure(error));
  }
}
export function* watchFetchUsers() {
  yield takeEvery(fetchUsers.request, fetchUsersAsync);
}
