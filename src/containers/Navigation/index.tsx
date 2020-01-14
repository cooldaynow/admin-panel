import React from 'react';
import { Icon, Button, PageHeader, Modal } from 'antd';
import WrappedSignIn from '../SignIn';
import styles from './index.less';

class Navigation extends React.Component {
  private formRef: any;

  showModal = () => {
    this.setState({
      isVisible: true
    });
  };
  handleOk = () => {
    const { form } = this.formRef.props;
    form.validateFields(async (err: any, values: any) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  };
  saveFormRef = (formRef: React.Component) => {
    this.formRef = formRef;
  };
  render() {
    return (
      <>
        <div className={styles.nav__wrap}>
          <PageHeader
            ghost={false}
            title='Admin pages'
            extra={[
              <Button key='1' onClick={this.showModal}>
                <Icon type='login' />
                Sign in
              </Button>
            ]}
          />
        </div>
        <Modal
          title='Sign in'
          // visible={isVisible}
          visible
          onOk={this.handleOk}
          okText={'Sign in'}
          // confirmLoading={isLoading}
          // onCancel={this.handleCancel}
          closable={false}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WrappedSignIn wrappedComponentRef={this.saveFormRef} />
          </div>
        </Modal>
      </>
    );
  }
}
export default Navigation;
