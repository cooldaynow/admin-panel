import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { fetchUsers } from 'store/actions/user';
import styles from './index.css';

const App = () => {
  const dispatch = useDispatch();
  const getUsers = () => dispatch(fetchUsers.request());
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1 className={styles.transition}>Hello World!</h1>
        <span>This is test redux-saga dispatch :)</span>
        <Button size='large' type='primary' onClick={getUsers}>
          Fetch users !
        </Button>
      </div>
    </div>
  );
};

export default App;
