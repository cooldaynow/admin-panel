import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './effects/user';

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
