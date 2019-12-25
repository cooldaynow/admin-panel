export type TUserName = string;
export type TUserId = number;

export type TUser = {
  name: TUserName;
  id: TUserId;
  email: string;
  age: number;
  gender: string;
};

export type TUserCollection = TUser[];

export type TUsersAction = {
  type: string;
  payload: any;
};
export type TUsersInitialState = {
  data: any;
  error: any;
};
