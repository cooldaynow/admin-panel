import TState from 'store/i';
import { createSelector } from 'reselect';
import { TUserCollection } from 'entities/user';

export const getUsers = (state: TState) => state.users.data.entities.users;

export const getUsersArray = createSelector(
  getUsers,
  (users: TUserCollection) => Object.values(users)
);
