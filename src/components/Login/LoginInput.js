import React, { useContext, useState } from 'react';
import { IsLoginContext } from '../../context/IsLoginProvider';

function LoginInput({ userInputHander }) {
  const { setIsLogin } = useContext(IsLoginContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    department: '',
    studentId: '',
  });

  const changeHandler = (value, action) => {
    const newUserInfo = { ...userInfo };
    newUserInfo[action] = value;
    setUserInfo(newUserInfo);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    setIsLogin(true);
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={submitHandler}>
      <div className="text-center my-3">
        <label htmlFor="name" className="mr-2">
          이름
        </label>
        <input
          id="name"
          type="text"
          className="border border-solid border-blue-400 rounded-lg"
          value={userInfo.name}
          onChange={(e) => changeHandler(e.target.value, 'name')}
        ></input>
      </div>
      <div className="text-center my-3">
        <label htmlFor="department" className="mr-2">
          학과
        </label>
        <input
          id="department"
          type="text"
          className="border border-solid border-blue-400 rounded-lg"
          value={userInfo.department}
          onChange={(e) => changeHandler(e.target.value, 'department')}
        ></input>
      </div>
      <div className="text-center my-3">
        <label htmlFor="studentId" className="mr-2">
          학번
        </label>
        <input
          id="studentId"
          type="number"
          className="border border-solid border-blue-400 rounded-lg"
          value={userInfo.studentId}
          onChange={(e) => changeHandler(e.target.value, 'studentId')}
        ></input>
      </div>
      <div className="text-center my-3">
        <button
          className="border border-solid rounded-lg w-16 bg-blue-500 text-white hover:bg-blue-700"
          type="submit"
        >
          로그인
        </button>
      </div>
    </form>
  );
}

export default LoginInput;
