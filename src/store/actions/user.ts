import { createAsyncAction } from 'typesafe-actions';
import { TUser, TUserCollection } from 'entities/user';
export enum UsersTypes {
  FETCH_USERS = '@users/FETCH',
  FETCH_USERS_SUCCESS = '@users/FETCH_SUCCESS',
  FETCH_USERS_FAILURE = '@users/FETCH_FAILURE'
}

export const fetchUsers = createAsyncAction(
  UsersTypes.FETCH_USERS,
  [UsersTypes.FETCH_USERS_SUCCESS, (data: TUserCollection) => data],
  [
    UsersTypes.FETCH_USERS_FAILURE,
    (error: Error) => ({
      error
    })
  ]
)();
