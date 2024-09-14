import React, { useState } from "react";
import "./Login.css";
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // Changed 'username' to 'email'
  const [password, setPassword] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoginClicked(true);
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter email and password");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/");
      })
      .catch((error) => {
        // Handle authentication errors
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
      });
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
          {/* Error message */}
          {errorMessage && (
            <div className="error-text">{errorMessage}</div>
          )}

          <div className="input-group">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                style={{
                  borderColor: loginClicked && !email && "red",
                  borderWidth: loginClicked && !email && "2px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{
                  borderColor: loginClicked && !password && "red",
                  borderWidth: loginClicked && !password && "2px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="toggle-password-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
          </div>

          <div className="input-container">
            <button
              style={{ background: "#0FA153" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;