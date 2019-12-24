import { combineReducers } from 'redux';
import users from './reducers/user';

const reducers = {
  users
};
export const reducer = combineReducers(reducers);
