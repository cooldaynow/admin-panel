import { ITestAction, TestActionsTypes as TAT, ITest } from "./i";

export const testFetch = (): ITestAction => ({
  type: TAT.REQUESTED_TEST_FETCH
});
export const testFetchSuccess = (data: ITest): ITestAction => ({
  type: TAT.REQUESTED_TEST_FETCH_SUCCESS,
  data
});
export const testFetchError = (): ITestAction => ({
  type: TAT.REQUESTED_TEST_FETCH_ERROR
});
