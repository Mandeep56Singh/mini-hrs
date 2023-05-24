import React, { useState } from "react";
import { Col, Row, Button, Form, Input, Card, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './sign-up.module.css';
import { AlertMessage } from "../../models/alert-message";
import { signUp } from "../../resources/auth.resource";
import { SignUp } from "../../models/auth";

const SignUpPage: React.FC = ()=>{
    const navigate = useNavigate();
    const [signUpMessage, setSignUpMessage] = useState<AlertMessage>();
    const onFinish = async (values: SignUp) => {
        const isFormValid = validateForm(values);
        if(!isFormValid) return;
        const newLogin = await signUp(values);
        if ('error' in newLogin) {
          const msg: AlertMessage = {
            message: newLogin.message,
            type: 'error',
          };
          setSignUpMessage(msg);
        } else {
            const msg: AlertMessage = {
                message: 'Sign up was successful. You will be redirected to the login page' ,
                type: 'success',
            };
              setSignUpMessage(msg);

              setTimeout(()=>{
                redirectToLoginPage();
              },3000);
         
        }
      };

      const validateForm = (values: SignUp): boolean=>{
          if(values.password !== values.confirmPassword){

            const msg: AlertMessage = {
                message: 'Password and Confirm password do not match',
                type: 'error',
              };
              setSignUpMessage(msg);

              return false;

          }

          return true;
      }
    
      const onFinishFailed = (errorInfo: any) => {
        return;
      };
    
      const redirectToLoginPage = () => {
        return navigate('/login');
      };
    return (
        <Row className={styles.signUpRow}>
        <Col span={8} offset={7}>
          <Card>
            {signUpMessage && signUpMessage.message.length > 0 ? (
              <Alert
                message={signUpMessage.message}
                type={signUpMessage.type}
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
              Sign Up
            </h2>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
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

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  { required: true, message: 'Please input your confirm password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
  
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  SignUp
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
};

export default SignUpPage;