import { combineReducers } from 'redux';
import usersReducer from './reducers/user';

const reducers = {
  usersReducer
};
export const reducer = combineReducers(reducers);
