import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      username: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string()
        .email("email must be vaild")
        .required("email is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`#^(|{}"'@$!%&])[\d~#-}"!]{8,20}$/,
          "Password format must match the standard password security guidelines. Password must be between 8 and 20 characters, contain an upper case letter, lower case letter, number, and special character."
        )
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      debugger;
      try {
        const data = {
          name: values.name,
          username: values.username,
          password: values.password,
        };
        await fetch(
          "https://zpworkshopapis.netlify.app/.netlify/functions/account/signup",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          }
        )
          .then((response) => response.json())
          .then((data) => {
            // setBlogs(data);
            alert("User Registered");
            // setPopupOpen(true);
            navigate("/login", { replace: true });
          });
        // postUser(regData);
      } catch (err) {
        console.error(err);
      }
    },
  });
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "url(/img/login_bg.jpg) no-repeat center center fixed",
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
            py: 10.25,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <form
              onSubmit={formik.handleSubmit}
              style={{ width: "100%", maxWidth: "80%" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                <Box
                  component="img"
                  src="/img/main-logo.png"
                  sx={{ width: "30px", mr: 1 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "#212121",
                    textDecoration: "none",
                  }}
                >
                  BLOGZ
                </Typography>
              </Box>
              <Typography variant="h4" color="error" sx={{ mt: 5 }}>
                Welcome,
                <br />
                let's get the ball rolling!
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#696969", mt: 2.5, maxWidth: "90%" }}
              >
                Please use the form to register. If you are a member, please{" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#D32F2F" }}
                >
                  Login
                </Link>{" "}
                .
              </Typography>

              <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    fullWidth
                    label="Name"
                    value={formik.values.name}
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    required
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={Boolean(
                      formik.touched.username && formik.errors.username
                    )}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    variant="outlined"
                    label="Username"
                    name="username"
                    placeholder="enter your email address"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    value={formik.values.username}
                    sx={{
                      borderColor: "neutral.300",
                    }}
                  />
                  {/* <TextField
                    fullWidth
                    error={Boolean(
                      formik.touched.username && formik.errors.username
                    )}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    label="Email address"
                    name="username"
                    required
                    value={formik.values.username}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                  /> */}
                </Grid>
                <Grid item md={6} xs={12}>
                  {" "}
                  <TextField
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                    label="Password"
                    name="password"
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    required
                  />
                </Grid>
                <Grid />
                {/* <Grid item md={6} xs={12}>
                  {" "}
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confrirmPassword"
                    value={formik.values.confrirmPassword}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    required
                  />
                </Grid> */}
                <Grid />
              </Grid>
              <Box sx={{ mt: 6 }}>
                <Button
                  fullwidth
                  type="submit"
                  variant="contained"
                  className="form__custom-button"
                  sx={{
                    boxShadow: "none",
                    py: 1.5,
                    borderRadius: 3,
                    width: "100%",
                    backgroundColor: "#4d4c4c",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
