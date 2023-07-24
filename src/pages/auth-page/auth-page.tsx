import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../../hooks';
import { LoginValues } from './interface';
import { thunkLogin } from '../../store/slices/thunk/userThunk';
import { useNavigate } from 'react-router-dom';


const AuthPage: React.FC = () => {
const dispatch = useAppDispatch();
const navigate = useNavigate()

const onFinish = (values: LoginValues) => {
  // console.log('values', values)
  dispatch(
      thunkLogin({
        values,
        navigate
      }),
  )
};

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthPage;
