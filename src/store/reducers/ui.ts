import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { createReducer, getType } from 'typesafe-actions';
import { setCloseLogin, setShowLogin } from '../actions/ui';
import { TModal } from '../../entities/ui';

const initialState: TModal = {
  isShowLogin: true
};

const modalReducer = createReducer<TModal>(initialState, {
  [getType(setShowLogin)]: state =>
    update(state, { $merge: { isShowLogin: true } }),
  [getType(setCloseLogin)]: state =>
    update(state, { $merge: { isShowLogin: false } })
});
const uiReducers = {
  modal: modalReducer
};
const uiReducer = combineReducers(uiReducers);
export default uiReducer;
