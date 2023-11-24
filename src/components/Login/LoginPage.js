import React from 'react';
import LoginInput from './LoginInput';

function LoginPage() {
  return (
    <div className="h-screen flex flex-col justify-around">
      <div className="flex-1 flex flex-col justify-end">
        <div className="text-blue-500 text-9xl text-center pb-8">카공족</div>
        <div className="text-blue-500 text-center pb-8">Study With Me..</div>
      </div>
      <div className="flex-1">
        <LoginInput />
      </div>
    </div>
  );
}

export default LoginPage;
