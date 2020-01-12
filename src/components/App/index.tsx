import React from 'react';
import { Button } from 'antd';
import { TUser } from '../../entities/user';
import styles from './index.css';

type TAppProps = {
  users: TUser[];
  showUsers(users: TUser[]): () => void;
};

const App = ({ users, showUsers }: TAppProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <h1 className={styles.transition}>Hello World!</h1>
        <span>This is test redux-saga dispatch :)</span>
        <Button size='large' type='primary' onClick={showUsers(users)}>
          Console users !
        </Button>
        {users.map(e => e.name).join(' | ')}
      </div>
    </div>
  );
};

export default App;
