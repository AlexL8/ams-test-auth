import React from 'react';
import { Button, Descriptions, Image, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './styles.module.css';
import { logoutThunk } from '../../store/slices/thunk/logoutThunk';
import { useNavigate } from 'react-router-dom';


const PrivPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const state = useAppSelector(state => state.user)

  const onFinish = () => {
    dispatch(
      logoutThunk({
        navigate
      }),
    )
  }

  return (
  <div className={styles.container}>
    <Image
      width={200}
      src={state.image}
      />
    <Descriptions layout='vertical' title="User Info">
        <Descriptions.Item label="First name">{state.firstName}</Descriptions.Item>
        <Descriptions.Item label="Last name">{state.lastName}</Descriptions.Item>
        <Descriptions.Item label="User name">{state.username}</Descriptions.Item>
        <Descriptions.Item label="Email">{state.email}</Descriptions.Item>
        <Descriptions.Item label="Gender">{state.gender}</Descriptions.Item>
        <Descriptions.Item label="ID">{state.id}</Descriptions.Item>
    </Descriptions>
    <Space wrap>
        <Button onClick={()=>onFinish()} type="primary">Exit</Button>
    </Space>
  </div>
  )
};

export default PrivPage;