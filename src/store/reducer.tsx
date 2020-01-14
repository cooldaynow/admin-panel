import { combineReducers } from 'redux';
import usersReducer from './reducers/user';
import uiReducer from './reducers/ui';

const reducers = {
  users: usersReducer,
  ui: uiReducer
};
export const reducer = combineReducers(reducers);
