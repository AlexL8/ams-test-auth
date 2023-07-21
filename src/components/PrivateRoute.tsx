import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import AuthPage from '../pages/auth-page/auth-page';
import PrivPage from '../pages/priv-page/priv-page';

export const PrivateRoute: React.FC<RouteProps> = ({ element: Component, ...rest }) => {
  const authToken = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={(props) => {
        return authToken ? <Component {...props} /> : <Navigate to="/login" />
      }}
    />
  )
}

