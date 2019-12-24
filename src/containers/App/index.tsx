import React, { ReactElement } from 'react';
import styles from './index.css';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { fetchUsers } from '../../store/actions/user';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const getUsers = () => dispatch(fetchUsers());
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.block}`}>
        <h1 className={styles.transition}>Hello World!</h1>
        <span>This is test redux-saga dispatch :)</span>
        <Button size={'large'} type={'primary'} onClick={getUsers}>
          Fetch users !
        </Button>
      </div>
    </div>
  );
};

export default App;
