import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import backgroundImage from "../../img/background.jpg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const auth = getAuth();
  const form = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9d7nemk", "template_wl41555", form.current, {
        publicKey: "WCKTq5LewiRALeVg-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Proceed with signup using Firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setSuccessMessage("Sign up was successful");
          setErrorMessage("");
          sendEmail(e);

          navigate("/login");
        })
        .catch((error) => {
          console.error("Error during sign-up:", error.message);
          setErrorMessage(error.message);
        });
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "400px", position: "relative", zIndex: 2 }}
      >
        <Stack alignItems="center" justifyContent="center" mb={3}>
          <Typography variant="h4">Sign Up</Typography>
        </Stack>

        <form ref={form} onSubmit={handleSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="user_email" // emailjs input name
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords Do Not Match"}
                name="user_password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                type={showPasswordConfirmation ? "text" : "password"}
                label="Confirm Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPasswordConfirmation}
                        edge="end"
                      >
                        {showPasswordConfirmation ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords Do Not Match"}
                name="confirm_password"
              />
            </Grid>
          </Grid>

          {errorMessage?.length >= 1 && (
            <Grid xs={12} mt={3}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
          {successMessage?.length >= 1 && (
            <Grid xs={12} mt={3}>
              <Alert severity="success">{successMessage}</Alert>
            </Grid>
          )}
          <Grid item sm={6} display="flex" justifyContent="center" mt={3}>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
