import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import AuthPage from './pages/auth-page/auth-page';
import PrivPage from './pages/priv-page/priv-page';



function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Routes>
          <Route exact path="/" element={AuthPage}/>
          <Route exact path="/private" element={PrivPage}/>
        </Routes>
        <AuthPage />
      </div>
    </div>
  );
}

export default App;
