import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import AuthPage from './pages/auth-page/auth-page';
import PrivPage from './pages/priv-page/priv-page';




function App() {
  return (
    <Routes>
      {ROUTES.map((route) => {
        route.isPrivate ? (
          <div/>
        ) : (<Route path={route.path} element={route.component}/>)   
        })}
    </Routes>
  );
}

export default App;

interface Page {
  path: string;
  component: React.ReactNode;
  isPrivate: boolean;
}
type Pages = Page[];

const ROUTES:Pages = [
  {
    path: '/login',
    component: <AuthPage/>,
    isPrivate: false
  },
  {
    path: '/profile',
    component: <PrivPage/>,
    isPrivate: false
  }
];

