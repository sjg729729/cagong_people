import React, { useContext } from 'react';

import { IsLoginContext } from './context/IsLoginProvider';
import LoginPage from './components/Login/LoginPage';
import Header from './components/Header/Header';
import Date from './components/Date/Date';
import Cafe from './components/Cafe/Cafe';

function App() {
  const { isLogin } = useContext(IsLoginContext);

  return (
    <div>
      {isLogin && (
        <>
          <Header />
          <Date />
          <Cafe />
        </>
      )}
      {!isLogin && <LoginPage />}
    </div>
  );
}

export default App;
