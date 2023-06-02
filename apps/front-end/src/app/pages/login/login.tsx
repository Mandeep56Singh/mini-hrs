import React, { useState } from 'react';
import { Col, Row, Button, Form, Input, Card, Alert } from 'antd';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../resources/auth.resource';
import { Login } from '../../models/auth';
import { setItem } from '../../resources/local-storage.resource';
import { AlertMessage } from '../../models/alert-message';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState<AlertMessage>();
  const onFinish = async (values: Login) => {
    const newLogin = await signIn(values);
    if ('error' in newLogin) {
      const msg: AlertMessage = {
        message: newLogin.message,
        type: 'error',
      };
      setLoginMessage(msg);
    } else {
      setItem('access_token', newLogin.access_token);
      setItem('current_user',values.username);
      redirectToPatientSearch();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    return;
  };

  const redirectToPatientSearch = () => {
    return navigate('/patient-search');
  };
  return (
    <Row className={styles.loginRow}>
      <Col span={8} offset={7}>
        <Card>
          {loginMessage && loginMessage.message.length > 0 ? (
            <Alert
              message={loginMessage.message}
              type={loginMessage.type}
              showIcon
            />
          ) : (
            ''
          )}
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            Log In
          </h2>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            data-testid="login-form"
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Link className={styles.signUpLink} to='/sign-up'>Signup instead</Link>     
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
