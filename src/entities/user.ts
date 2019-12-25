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

export type TUsersInitialState = {
  data: TUserCollection;
  error: Error | null;
};
