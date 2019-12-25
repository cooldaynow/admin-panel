import { createAsyncAction } from 'typesafe-actions';
import { TUserCollection } from 'entities/user';

export const FETCH_USERS = '@users/FETCH';
export const FETCH_USERS_SUCCESS = '@users/FETCH_SUCCESS';
export const FETCH_USERS_FAILURE = '@users/FETCH_FAILURE';

export const fetchUsers = createAsyncAction(
  FETCH_USERS,
  [FETCH_USERS_SUCCESS, (data: TUserCollection) => data],
  [FETCH_USERS_FAILURE, (error: Error) => error]
)();
