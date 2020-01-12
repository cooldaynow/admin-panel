import { createReducer, getType } from 'typesafe-actions';
import update from 'immutability-helper';
import { TUsersInitialState } from '../../entities/user';
import { fetchUsers } from '../actions/user';

const initialState: TUsersInitialState = {
  data: { entities: { users: {} }, result: [] },
  error: null
};

const usersReducer = createReducer<any>(initialState, {
  [getType(fetchUsers.success)]: (state, { payload }) =>
    update(state, { $merge: { data: payload, error: null } }),

  [getType(fetchUsers.failure)]: (state, { payload }) =>
    update(state, { $merge: { error: payload } })
});
export default usersReducer;
