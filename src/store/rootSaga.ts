import { put, takeEvery, all, call } from "redux-saga/effects";
import network from "../network";
import { testFetchError, testFetchSuccess } from "./testReducer/actions";
import { TestActionsTypes as TAT } from "./testReducer/i";

function* fetchTestAsync() {
  try {
    const payload = yield call(network.getTest);
    yield put(testFetchSuccess(payload));
  } catch (error) {
    yield put(testFetchError());
    console.log(error, "error");
  }
}
function* watchTestFetch() {
  yield takeEvery(TAT.REQUESTED_TEST_FETCH, fetchTestAsync);
}
export default function* rootSaga() {
  yield all([watchTestFetch()]);
}
