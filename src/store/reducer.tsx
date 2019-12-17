import { combineReducers } from "redux";
import testReducer from "./testReducer";

const reducers = {
  testReducer
};
export const reducer = combineReducers(reducers);
