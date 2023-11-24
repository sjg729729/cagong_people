import React, { useContext } from 'react';
import { IsLoginContext } from '../../context/IsLoginProvider';

function Header() {
  const { setIsLogin } = useContext(IsLoginContext);

  const logOutHandler = () => {
    setIsLogin(false);
  };

  return (
    <header className="h-14 flex justify-around bg-blue-300">
      <div className="flex items-center flex-1 ml-10 text-white font-bold text-4xl">
        카공족
      </div>
      <div className="flex items-center text-sm font-bold mr-10 text-white">
        소프트웨어학과 신진건
      </div>
      <div className="flex items-center">
        <button
          className="text-white text-sm font-bold mr-7 bg-blue-500 h-9 w-16 rounded-lg hover:bg-blue-700"
          onClick={logOutHandler}
        >
          로그아웃
        </button>
      </div>
    </header>
  );
}

export default Header;
