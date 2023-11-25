import React, { useContext } from 'react';
import { IsLoginContext } from '../../context/IsLoginProvider';

function Header() {
  const { setIsLogin } = useContext(IsLoginContext);

  let userInfo = {
    name: '',
    department: '',
    studentId: '',
  };
  if (localStorage.getItem('userInfo')) {
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  const logOutHandler = () => {
    localStorage.removeItem('userInfo');
    setIsLogin(false);
  };

  return (
    <header className="h-14 flex justify-around bg-blue-300">
      <div className="flex items-center flex-1 ml-10 text-white font-bold text-4xl">
        카공족
      </div>
      <div className="flex items-center text-sm font-bold mr-10 text-white">
        {`${userInfo.department} / ${userInfo.studentId} / ${userInfo.name}`}
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
