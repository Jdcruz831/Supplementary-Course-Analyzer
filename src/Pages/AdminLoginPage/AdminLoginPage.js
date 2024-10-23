import React, { useState } from "react";
import backgroundImage from "../../img/background.jpg";
import loginIcon from "../../img/login-icon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Dialog, Button, Grid, TextField, Box } from '@mui/material';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    setLoginClicked(true);
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter Admin Email and Password");
      return;
    }
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Check if the user is an admin
        if (email === "adminSupp@gmail.com" && password==="Pass@123") {
          console.log("Login Sucessful") // Replace with actual admin check
          navigate("/SourceData");
        } else {
          setErrorMessage("You are not authorized to access the Admin Panel.");
        }
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
          default:
            errorMsg = error.message;
        }

        setErrorMessage(errorMsg);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <img src={loginIcon} alt="Admin Login Icon" style={{ width: '50%', height: 'auto' }} />
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
            onClick={handleAdminLogin}
          >
            Admin Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
