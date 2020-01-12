import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import TState from '../../store/i';
import { fetchUsers } from '../../store/actions/user';
import { TUser } from '../../entities/user';
import { getUsersArray } from '../../selectors/user';
import App from '../../components/App';

type TAppProps = {
  users: TUser[];
  getUsers: () => Action;
};

class AppContainer extends Component<TAppProps> {
  state = {
    info: 'users'
  };

  showUsers = (users: TUser[]) => (): void => {
    const { info } = this.state;
    console.log(users, info);
  };

  componentDidMount(): void {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users } = this.props;
    console.log('App container render', { users });
    return <App users={users} showUsers={this.showUsers} />;
  }
}

const mapStateToProps = (state: TState) => ({
  users: getUsersArray(state)
});

const mapDispatchToProps = {
  getUsers: fetchUsers.request
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
