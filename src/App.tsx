import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {PrivateRoute} from "./components/PrivateRoute";
import styles from './app.module.css';
import { PRIVATE_PAGES, PUBLIC_PAGES } from './routes';


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

