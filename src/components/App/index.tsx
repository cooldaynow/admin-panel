import React from 'react';
import { Button, Layout } from 'antd';
import { TUser } from 'entities/user';
import Navigation from '../../containers/Navigation';
import styles from './index.less';
const { Header, Footer, Content } = Layout;

type TAppProps = {
  users: TUser[];
  showUsers(users: TUser[]): () => void;
};

const App = ({ users, showUsers }: TAppProps) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navigation />
      </Header>
      <Content className={styles.content}>
        <div className={styles.block}>
          <h1 className={styles.transition}>Hello World!</h1>
          <span>This is test redux-saga dispatch :)</span>
          <Button size='large' type='primary' onClick={showUsers(users)}>
            Console users !
          </Button>
          {users.map(e => e.name).join(' | ')}
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
