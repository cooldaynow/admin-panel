const initialState: any = {
  test: false
};
const testReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case "test":
      return {
        test: !state.test
      };
    default:
      return state;
  }
};
export default testReducer;
