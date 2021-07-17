import React from 'react';
import SignUp from '../components/SignUp';
import Login from '../components/Login';

const LoginSignUp = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className=" mb-3 p-3">
          <Login />
        </div>
      </div>
      <div className="flex-row justify-center">
        <div className=" mb-3 p-3">
            <SignUp />
        </div>
     </div>
  </main>
)};

export default LoginSignUp;