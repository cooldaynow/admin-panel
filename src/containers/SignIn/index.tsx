import React from 'react';
import { Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import styles from './index.less';

class SignIn extends React.Component<FormComponentProps> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className={styles.sign__in}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password'
            />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create<FormComponentProps>({
  name: 'normal_login'
})(SignIn);
