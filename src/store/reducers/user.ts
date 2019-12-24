import {
  UsersTypes as UT,
  TUsersAction,
  TUsersCollection
} from '../../entities/user';

const initialState: TUsersCollection = {
  users: [],
  error: false
};
const users = (state = initialState, action: TUsersAction) => {
  switch (action.type) {
    case UT.FETCH_USERS_SUCCESS:
      return {
        error: false,
        users: action.payload
      };
    case UT.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
export default users;
