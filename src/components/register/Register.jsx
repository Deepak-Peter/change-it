import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background: "url(/img/bg-blue.webp) no-repeat center center fixed",
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
              onSubmit={(event) => event.preventDefault()}
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
                    fullWidth
                    label="Full name"
                    name="name"
                    required
                    value=""
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email address"
                    name="email"
                    required
                    value=""
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  {" "}
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    value=""
                  />
                </Grid>
                <Grid />
                <Grid item md={6} xs={12}>
                  {" "}
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    name="conpassword"
                    value=""
                  />
                </Grid>
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
