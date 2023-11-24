import React, { useContext } from 'react';
import { IsLoginContext } from '../../context/IsLoginProvider';

function LoginInput() {
  const { setIsLogin } = useContext(IsLoginContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={submitHandler}>
      <div className="text-center my-3">
        <label className="mr-2">이름</label>
        <input
          type="text"
          className="border border-solid border-blue-400 rounded-lg"
        ></input>
      </div>
      <div className="text-center my-3">
        <label className="mr-2">학과</label>
        <input
          type="text"
          className="border border-solid border-blue-400 rounded-lg"
        ></input>
      </div>
      <div className="text-center my-3">
        <label className="mr-2">학번</label>
        <input
          type="number"
          className="border border-solid border-blue-400 rounded-lg"
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
