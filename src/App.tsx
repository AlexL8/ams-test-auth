import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/auth-page/auth-page';
import PrivPage from './pages/priv-page/priv-page';
import {PrivateRoute} from "./components/PrivateRoute";
import styles from './app.module.css';


function App() {
  return (
    <div className={styles.container}>
      <Routes>
        {PUBLIC_PAGES.map(({ path, component: Component }, index) => {
          return (
              <Route
                  key={index}
                  path={path}
                  element={Component}
              />
          );
        })}
        {PRIVATE_PAGES.map(({ path, component: Component }, index) => {
          return (
              <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateRoute>
                      {Component}
                    </PrivateRoute>
                  }
              />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

export enum PAGE_PATH {
  LOGIN = '/login',
  PROFILE = '/profile',
}

interface Page {
  path: PAGE_PATH;
  component: React.ReactNode;
  isPrivate: boolean;
}

type Pages = Page[];

export const ROUTES: Pages = [
  {
    path: PAGE_PATH.LOGIN,
    component: <AuthPage/>,
    isPrivate: false
  },
  {
    path: PAGE_PATH.PROFILE,
    component: <PrivPage/>,
    isPrivate: true
  },
];

export const PUBLIC_PAGES = ROUTES.filter(
    (page) => !page.isPrivate
);

export const PRIVATE_PAGES = ROUTES.filter(
    (page) => page.isPrivate
);