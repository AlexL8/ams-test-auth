import React from 'react';
import { Descriptions } from 'antd';
import { useAppSelector } from '../../hooks';


const PrivPage: React.FC = () => {
  const state = useAppSelector(state => state.user)
  console.log(state); 
  
  return (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1234</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
  )
};

export default PrivPage;