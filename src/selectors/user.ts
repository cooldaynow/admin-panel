import { createSelector } from 'reselect';
import TState from '../store/i';
import { TUserCollection } from '../entities/user';

export const getUsers = (state: TState) =>
  state.usersReducer.data.entities.users;

export const getUsersArray = createSelector(
  getUsers,
  (users: TUserCollection) => Object.values(users)
);
