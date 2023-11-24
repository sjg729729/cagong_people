import React, { createContext, useContext, useState, useMemo } from 'react';

const userId = localStorage.getItem('id');
const token = localStorage.getItem('token');

export const IsLoginContext = createContext({
  isLogin: userId !== null && token !== null ? true : false,
});

export function IsLoginProvider(props) {
  const [isLogin, setIsLogin] = useState(
    userId !== null && token !== null ? true : false
  );

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
