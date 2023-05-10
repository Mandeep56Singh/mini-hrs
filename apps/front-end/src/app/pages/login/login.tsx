import React from 'react';
import { Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import styles from './login.module.css';
import { Card } from 'antd';
import { useNavigate } from "react-router-dom";

const Login: React.FC = ()=>{
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        redirectToHomePage();
     };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
    const redirectToHomePage = ()=>{
        console.log('redirect to home page');
        return navigate("/");
    };
    return(
    <Row className={styles.loginRow}>
     <Col span={8} offset={7}>
      <Card>
            <h2 style={{
                textAlign: 'center'
            }}>Log In</h2>
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
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
        </Form>
    </Card>
  </Col>
  </Row>
  );
};

export default Login;