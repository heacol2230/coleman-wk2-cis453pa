import React from 'react'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-login">
        <div className="login-logingroup">
          <div className="login-frame29">
            <span className="login-text">Please Sign In</span>
            <div className="login-group7">
              <span className="login-text1">
                <span>Username</span>
              </span>
              <img
                alt="Line1213"
                src="/line1213-fjd8.svg"
                className="login-line1"
              />
            </div>
            <div className="login-group8">
              <span className="login-text3">
                <span>Password</span>
              </span>
              <img
                alt="Line2215"
                src="/line2215-p5yr.svg"
                className="login-line2"
              />
            </div>
          </div>
          <button className="login-buttonprimary">
            <span className="login-text5">
              <span>SUBMIT</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
