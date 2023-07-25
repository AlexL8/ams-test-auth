import React from 'react';
import { Button, Descriptions, Image, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './styles.module.css';
import { logoutThunk } from '../../store/thunks/userThunk';
import { useNavigate } from 'react-router-dom';


const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector(state => state.user.user)
  const welcomePhrase = `Welcome, dear ${state.firstName} ${state.lastName}!`;

  const onLogout = () => {
    dispatch(
      logoutThunk({
        navigate
      }),
    )
  }

  return (
  <div className={styles.container}>
    <Image
      width={WIDTH_OF_IMAGE}
      src={state.image}
      />
    <Descriptions layout='vertical' title={welcomePhrase}>
        <Descriptions.Item label="First name">{state.firstName}</Descriptions.Item>
        <Descriptions.Item label="Last name">{state.lastName}</Descriptions.Item>
        <Descriptions.Item label="User name">{state.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{state.email}</Descriptions.Item>
        <Descriptions.Item label="Gender">{state.gender}</Descriptions.Item>
        <Descriptions.Item label="ID">{state.id}</Descriptions.Item>
    </Descriptions>
    <Space wrap>
        <Button onClick={() => onLogout()} type="primary">Exit</Button>
    </Space>
  </div>
  )
};

export default ProfilePage;

const WIDTH_OF_IMAGE = 200;