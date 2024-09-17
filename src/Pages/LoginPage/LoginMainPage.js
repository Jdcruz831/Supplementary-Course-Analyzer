import React, { useState } from "react";
import "./Login.css";
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, TextField } from '@mui/material';


const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoginClicked(true);
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter Email and Password");
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

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Manage Password
  const [openManagePassword, setOpenManagePassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');
  const [errorResetPassword, setErrorResetPassword] = useState('');

  const handleManagePasswordOpen = () => {
    setErrorResetPassword('');
    setEmailForReset('');
    setOpenManagePassword(true);
  };

  const handleManagePasswordClose = () => {
    setOpenManagePassword(false);
  };

  const handleSendPasswordResetEmail = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, emailForReset)
      .then(() => {
        // Password reset email sent!
        alert('Password reset email sent!');
        setOpenManagePassword(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorResetPassword(errorMessage);
      });
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
          <div>
            <button style={{ background: "#0FA153" }} onClick={handleOpen}>
              Create New Account
            </button>

            <div className="manage-password" onClick={handleManagePasswordOpen}>
              Manage Password
            </div>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Create Account
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="First Name"
                      label="First Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      id="Last Name"
                      label="Last Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <TextField
                  margin="dense"
                  id="Email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} style={{ background: "#0FA153" }}>
                  Submit
                </Button>
                <Button onClick={handleClose} style={{ background: "#0FA153" }}>
                  X
                </Button>
              </DialogActions>
            </Dialog>

            {/* Manage Password Dialog */}
            <Dialog open={openManagePassword} onClose={handleManagePasswordClose}>
              <DialogTitle>Manage Password</DialogTitle>
              <DialogContent>
                {errorResetPassword && (
                  <div className="error-text">{errorResetPassword}</div>
                )}
                <TextField
                  autoFocus
                  margin="dense"
                  id="emailForReset"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={emailForReset}
                  onChange={(e) => setEmailForReset(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleSendPasswordResetEmail} style={{ background: "#0FA153" }}>
                  Submit
                </Button>
                <Button onClick={handleManagePasswordClose} style={{ background: "#0FA153" }}>
                  X
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;