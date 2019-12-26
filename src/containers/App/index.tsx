import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { fetchUsers } from 'store/actions/user';
import styles from './index.css';

const App = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const getUsers = () => dispatch(fetchUsers.request());
  const handleOk = () => setVisible(!visible);
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1 className={styles.transition}>Hello World!</h1>
        <span>This is test redux-saga dispatch :)</span>
        <Button size='large' type='primary' onClick={getUsers}>
          Fetch users !
        </Button>
        <Button size='large' type='primary' onClick={handleOk}>
          Open Modal !
        </Button>
        <Modal
          title='Basic Modal'
          visible={visible}
          onOk={handleOk}
          onCancel={handleOk}
        />
      </div>
    </div>
  );
};

export default App;
