import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import TState from '../../store/i';
import { fetchUsers } from '../../store/actions/user';
import { TUserCollection } from '../../entities/user';
import styles from './index.css';

type TAppProps = {
  users: TUserCollection;
  getUsers: () => Action;
};

class App extends React.Component<TAppProps> {
  state = {
    info: 'users'
  };

  componentDidMount(): void {
    const { getUsers } = this.props;
    getUsers();
  }
  showUsers = (users: TUserCollection) => (): void => {
    const { info } = this.state;
    console.log(users, info);
  };

  render() {
    const { users } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h1 className={styles.transition}>Hello World!</h1>
          <span>This is test redux-saga dispatch :)</span>
          <Button size='large' type='primary' onClick={this.showUsers(users)}>
            Fetch users !
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: TState) => ({
  users: state.usersReducer.data
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUsers: () => dispatch(fetchUsers.request())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
