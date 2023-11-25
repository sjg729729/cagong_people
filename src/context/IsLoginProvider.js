import React, { createContext, useContext, useState, useMemo } from 'react';

const userInfo = localStorage.getItem('userInfo');

export const IsLoginContext = createContext({
  isLogin: userInfo !== null,
});

export function IsLoginProvider(props) {
  const [isLogin, setIsLogin] = useState(userInfo !== null);

  // prevent re-rendering all components using 'value' state
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);
  return (
    <IsLoginContext.Provider value={value}>
      {props.children}
    </IsLoginContext.Provider>
  );
}

// custom hook
export function useIsLoginState() {
  const context = useContext(IsLoginContext);
  if (!context) {
    throw new Error('Cannot find IsLoginProvider');
  }

  return context.isLogin;
}
