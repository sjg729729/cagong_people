import React, { useContext } from 'react';

import { IsLoginContext } from './context/IsLoginProvider';
import LoginPage from './components/Login/LoginPage';
import Header from './components/Header/Header';
import Today from './components/Date/Today';
import Cafe from './components/Cafe/Cafe';

function App() {
  const { isLogin } = useContext(IsLoginContext);

  // if (localStorage.getItem('userInfo')) {
  //   setIsLogin(true);
  // }

  return (
    <div>
      {isLogin && (
        <>
          <Header />
          <Today />
          <Cafe />
        </>
      )}
      {!isLogin && <LoginPage />}
    </div>
  );
}

export default App;
