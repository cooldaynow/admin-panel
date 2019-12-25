import { createReducer, getType } from 'typesafe-actions';
import { TUsersInitialState } from '../../entities/user';
import { fetchUsers } from '../actions/user';

const initialState: TUsersInitialState = {
  data: [],
  error: { name: '', message: '' }
};

const usersReducer = createReducer<TUsersInitialState, any>(initialState, {
  [getType(fetchUsers.success)]: (state, action) => ({
    ...state,
    data: action.payload
  }),
  [getType(fetchUsers.failure)]: (state, action) => ({
    ...state,
    error: action.payload
  })
});
export default usersReducer;
