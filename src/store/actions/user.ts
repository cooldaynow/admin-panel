import { action } from 'typesafe-actions';
import { UsersTypes as UT, TUser, TUsersAction } from '../../entities/user';

export const fetchUsers = (): TUsersAction => action(UT.FETCH_USERS);
export const fetchUsersSuccess = (users: TUser) =>
  action(UT.FETCH_USERS_SUCCESS, users);

export const fetchUsersFailure = (): TUsersAction =>
  action(UT.FETCH_USERS_FAILURE);
