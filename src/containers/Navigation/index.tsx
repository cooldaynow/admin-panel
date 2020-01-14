import React from 'react';
import { Icon, Button, PageHeader, Modal } from 'antd';
import WrappedSignIn from '../SignIn';
import styles from './index.less';
import { connect } from 'react-redux';
import { setCloseLogin } from '../../store/actions/ui';
import TState from '../../store/i';

class Navigation extends React.Component<any> {
  private formRef: any;

  showModal = () => {
    this.props.closeModal();
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
          visible={this.props.isShowLogin}
          onOk={this.handleOk}
          okText='Sign in'
          // confirmLoading={isLoading}
          onCancel={this.showModal}
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
const mapStateToProps = (state: TState) => ({
  isShowLogin: state.ui.modal.isShowLogin
});
const mapDispatchToProps = {
  closeModal: setCloseLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
