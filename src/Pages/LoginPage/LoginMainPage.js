import React, { useState } from "react";
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, TextField, Box } from '@mui/material';

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
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        let errorMsg = "";

        switch (error.code) {
          case "auth/invalid-credential":
            errorMsg = "Incorrect Email or Password.";
            break;
          case "auth/invalid-password":
            errorMsg = "Please enter a valid password.";
            break;
          case "auth/invalid-email":
            errorMsg = "Please enter a valid email address.";
            break;
          case "auth/too-many-requests":
            errorMsg = `Your account has been temporarily locked due to too many failed login attempts. 
            Please reset your password or try again later.`;
            break;
          default:
            errorMsg = error.message;
        }

        setErrorMessage(errorMsg);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openManagePassword, setOpenManagePassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');
  const [errorResetPassword, setErrorResetPassword] = useState('');

  const handleManagePasswordOpen = () => {
    setErrorResetPassword('');
    setEmailForReset('');
    setOpenManagePassword(true);
  };

  const handleManagePasswordClose = () => setOpenManagePassword(false);

  const handleSendPasswordResetEmail = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, emailForReset)
      .then(() => {
        alert('Password reset email sent!');
        setOpenManagePassword(false);
      })
      .catch((error) => {
        let errorMessage = "";

        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Please enter a valid email address.";
            break;
          default:
            errorMessage = error.message;
        }

        setErrorResetPassword(errorMessage);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          width: '75%',
          maxWidth: 770,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          background: 'linear-gradient(to bottom, #17503e 70%, #001E13 100%)',
          opacity: 0.9,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#CBB778',
            width: '100%',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            py: 1,
          }}
        >
          <img src={loginIcon} alt="Login Icon" style={{ width: '50%', height: 'auto' }} />
        </Box>

        <Box sx={{ p: 9 , width:'75%'}}>
          {errorMessage && (
            <Box sx={{ color: 'white', textAlign: 'center', mb: 2 }}>{errorMessage}</Box>
          )}

          <Box sx={{ mb: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <label style={{ color: 'white', fontSize: 15, fontWeight:'medium'}}>Email</label>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={loginClicked && !email}
                  helperText={loginClicked && !email ? 'Please enter your email' : ''}
                  InputProps={{
                    sx: { backgroundColor: 'white', width: '75%' }
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <label style={{ color: 'white', fontSize: 15,fontWeight:'medium' }}>Password</label>
              </Grid>
              <Grid item xs={9}>
                <Box sx={{ position: 'relative' }}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={loginClicked && !password}
                    helperText={loginClicked && !password ? 'Please enter your password' : ''}
                    InputProps={{
                      sx: { backgroundColor: 'white', width: '75%' }
                    }}
                  />
                  <Button
                    onClick={togglePasswordVisibility}
                    sx={{
                      position: 'absolute',
                      right: 110,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Button
            fullWidth
            sx={{ backgroundColor: '#0FA153', color: 'white', mb: 2, 
              padding: '8px 16px', 
            width: '55%', 
            fontSize: '1rem',
            ml:4,
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Button
            onClick={() => {
            
            navigate('/Register'); }}
            fullWidth
            sx={{ backgroundColor: '#0FA153', color: 'white', mb: 2, 
              padding: '8px 16px', 
            width: '55%', 
            fontSize: '1rem',
            ml:4,
            }}
          >
            Create New Account
          </Button>

          <Box sx={{ textAlign: 'center', cursor: 'pointer', color: '#007bff', '&:hover': { textDecoration: 'underline' } }} onClick={handleManagePasswordOpen}>
            Manage Password
          </Box>
          {/* Create Account Dialog 
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Account</DialogTitle>
            <DialogContent>
              /* <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField autoFocus margin="dense" label="First Name" type="text" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField margin="dense" label="Last Name" type="text" fullWidth />
                </Grid>
              </Grid>
              <TextField margin="dense" label="Email" type="email" fullWidth />
              <TextField margin="dense" label="Password" type="password" fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ backgroundColor: '#0FA153', color: 'white' }}>
                Submit
              </Button>
              <Button onClick={handleClose} sx={{ backgroundColor: '#0FA153', color: 'white' }}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog> */}

          {/* Manage Password Dialog */}
          <Dialog open={openManagePassword} onClose={handleManagePasswordClose}>
            <DialogTitle>Manage Password</DialogTitle>
            <DialogContent>
              {errorResetPassword && (
                <Box sx={{ color: 'red', textAlign: 'center', mb: 2 }}>{errorResetPassword}</Box>
              )}
              <TextField
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                value={emailForReset}
                onChange={(e) => setEmailForReset(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSendPasswordResetEmail} sx={{ backgroundColor: '#0FA153', color: 'white' }}>
                Submit
              </Button>
              <Button onClick={handleManagePasswordClose} sx={{ backgroundColor: '#0FA153', color: 'white' }}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
