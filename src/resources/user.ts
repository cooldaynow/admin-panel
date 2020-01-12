import { normalize, NormalizedSchema, schema } from 'normalizr';
import { TUser, TUserId, TUsersState } from '../entities/user';

export const normalizeUsers = (
  users: TUser[]
): NormalizedSchema<TUsersState, TUserId[]> => {
  const user = new schema.Entity('users');
  const userListSchema = [user];
  return normalize(users, userListSchema);
};
