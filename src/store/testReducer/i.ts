export enum TestActionsTypes {
  REQUESTED_TEST_FETCH = 'REQUESTED_TEST_FETCH',
  REQUESTED_TEST_FETCH_SUCCESS = 'REQUESTED_TEST_FETCH_SUCCESS',
  REQUESTED_TEST_FETCH_ERROR = 'REQUESTED_TEST_FETCH_ERROR'
}
export interface ITest {
  data: any;
  loading: boolean;
  error: boolean;
}
export interface ITestAction {
  type: string;
  data?: ITest;
}

export interface ITestState {
  test: ITest;
}
