import React, { useState } from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  IconButton,
  InputAdornment,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email(" username must be vaild")
        .required(" username is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`#^(|{}"'@$!%&])[\d~#-}"!]{8,20}$/,
          "Password format must match the standard password security guidelines. Password must be between 8 and 20 characters, contain an upper case letter, lower case letter, number, and special character."
        )
        .required("New Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        if (
          values.username === "ravi@gmail.com" &&
          values.password === "P@ssW0rd"
        ) {
          alert("login success");
          localStorage.setItem("isLoggedIn", "user");
          window.location.reload();
        } else if (
          values.username === "admin@gmail.com" &&
          values.password === "P@ssW0rd"
        ) {
          localStorage.setItem("isLoggedIn", "admin");
          window.location.reload();
        }
        const user=values.username.split("@");
        localStorage.setItem('blogUser',user[0]);
        // postUser(regData);
      } catch (err) {
        console.error(err);
      }
    },
  });
  //   state = {
  //     email: "",
  //     password: ""
  //   };
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();


  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "url(/img/bg1.png) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            background: "white",
            position: "absolute",
            right: -20,
            borderRadius: 5,
            py: 4,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <form
              className="form"
              noValidate
              onSubmit={formik.handleSubmit}
              style={{ width: "100%", maxWidth: "80%" }}
            >
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "skyblue",
                  textDecoration: "none",
                  mb: 5,
                }}
              >
                BLOGZ
              </Typography>
              <Typography variant="h4" sx={{ color: "#027DB5" }}>
                Welcome,
                <br /> let's get started!
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#696969", mt: 2.5, maxWidth: "90%" }}
              >
                Please use your credentials to login. If you are not a member,
                please{" "}
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "#027DB5" }}
                >
                  Sign Up
                </Link>{" "}
                .
              </Typography>
              <Box
                id="invite-user-email"
                component="div"
                sx={{
                  width: "100%",
                  mt: 3.5,
                  mb: 2,
                }}
              >
                <TextField
                  fullWidth
                  error={Boolean(
                    formik.touched.username && formik.errors.username
                  )}
                  helperText={formik.touched.username && formik.errors.username}
                  variant="outlined"
                  label="Username"
                  name="username"
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  value={formik.values.username}
                  sx={{
                    borderColor: "neutral.300",
                  }}
                />
              </Box>
              <Box
                id="invite-user-last-name"
                component="div"
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  helperText={formik.touched.password && formik.errors.password}
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  sx={{
                    borderColor: "neutral.300",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <Visibility sx={{ color: "#6B7280" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "#6B7280" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  fullWidth
                />
              </Box>

              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="form__custom-button"
                sx={{ boxShadow: "none", py: 1.5, borderRadius: 3 }}
              >
                Log in
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
export default Login;
