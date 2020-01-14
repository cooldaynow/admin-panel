import { TUsersInitialState } from 'entities/user';
import { TUi } from '../entities/ui';

type TState = {
  users: TUsersInitialState;
  ui: TUi;
};
export default TState;
