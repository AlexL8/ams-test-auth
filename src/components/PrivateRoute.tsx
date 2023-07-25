import React from 'react';
import { Navigate } from 'react-router-dom';
import { PAGE_PATH } from '../routes/interfaces';

interface Props {
  children: React.ReactNode
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const authToken = localStorage.getItem('token')
  if (!authToken) return <Navigate to={PAGE_PATH.LOGIN} />;
  return (
      <>
        {children}
      </>
  )
}