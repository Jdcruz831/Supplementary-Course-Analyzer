import React, { useState } from "react";
import "./Login.css";
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLoginClicked(true);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="login-form">
        <div className="login-header">
          <img src={loginIcon} alt="Login Icon" className="login-icon" />
        </div>

        <div className="login-box">
          <div className="input-container">
            <label htmlFor="errorMessage"></label>
            {/* Show error message only when loginClicked is true */}
            {loginClicked && !username && !password && (
              <text className="error-text">Please enter username and password</text>
            )}
          </div>

          <div className="input-group">
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                style={{ 
                  borderColor: loginClicked && !username && "red",
                  borderWidth: loginClicked && !username && "2px" // Increase border width
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
  type={showPassword ? "text" : "password"}
  id="password"
  style={{ 
    borderColor: loginClicked && !password && "red",
    borderWidth: loginClicked && !password && "2px" // Increase border width
  }}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
              <button className="toggle-password-button" onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
          </div>

          <div className="input-container">
          <label htmlFor="loginButton"></label>
            <button style={{ background: '#0FA153' }} onClick={handleLogin}>Login</button>
          </div>

          <div className="input-container">
            <label htmlFor="managepassword"></label>
            <text
              className="error-text"
              type="text"
              id="managePassword"
            >
              Manage Password
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;