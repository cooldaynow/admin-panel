export enum UsersTypes {
  FETCH_USERS = '@users/FETCH',
  FETCH_USERS_SUCCESS = '@users/FETCH_SUCCESS',
  FETCH_USERS_FAILURE = '@users/FETCH_FAILURE'
}

export type TUserName = string;
export type TUserId = number;

export type TUser = {
  name: TUserName;
  id: TUserId;
  email: string;
  age: number;
  sex: string;
};
export type TUsersCollection = {
  users?: TUser[];
  error: boolean;
};
export type TUsersAction = {
  type: string;
  payload?: TUser[];
};
