import { EntityCollection } from 'utils/entity';

export type TUserName = string;
export type TUserId = number;

export type TUser = {
  name: TUserName;
  id: TUserId;
  email: string;
  age: number;
  gender: string;
};

export type TUserCollection = EntityCollection<TUser>;

export type TUsersState = {
  users: TUserCollection;
};

type TUserData = {
  entities: TUsersState;
  result: TUserId[];
};

export type TUsersInitialState = {
  data: TUserData;
  error: Error | null;
};
