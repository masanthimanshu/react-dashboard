import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  Box,
  TextField,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Alert,
} from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin@gmail.com" && pass === "admin@1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            p: 5,
            boxShadow: 3,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <img src="./images/logo.png" alt="Logo" />
          <br />
          <br />
          {showAlert ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              Incorrect Username or Password
            </Alert>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              placeholder="Enter Your Username"
              type="email"
              sx={{ mb: 2 }}
              fullWidth
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <FormControl sx={{ mb: 4 }} fullWidth>
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                label="Password"
                placeholder="Enter Your Password"
                type={showPass ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              LOGIN
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
