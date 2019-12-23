import { ITestAction, ITestState, TestActionsTypes as TAT } from './i';

const initialState: ITestState = {
  test: {
    data: {},
    loading: true,
    error: false
  }
};
const testReducer = (state = initialState, { type, data }: ITestAction) => {
  switch (type) {
    case TAT.REQUESTED_TEST_FETCH_SUCCESS:
      console.log(data, 'fetch data');
      return {
        test: { ...state.test, loading: true, data, error: false }
      };
    case TAT.REQUESTED_TEST_FETCH_ERROR: {
      return {
        ...state,
        test: { ...state.test, error: true, loading: false }
      };
    }
    default:
      return initialState;
  }
};
export default testReducer;
