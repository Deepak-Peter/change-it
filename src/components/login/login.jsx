import React, { useState } from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import Dashboard from "../dashboard/Dashboard";
// import Button from "./components/Button";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event
  ) => {
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
        // .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`#^(|{}"'@$!%&])[\d~#-}"!]{8,20}$/,
        //   "Password format must match the standard password security guidelines. Password must be between 8 and 20 characters, contain an upper case letter, lower case letter, number, and special character."
        // )
        .required("New Password is required"),
    }),
    onSubmit: async (values) => {

      try {
        const regData = {
          username: values.username,
          password: values.password,
        };
        if (values.username == "sample@gmail.com" && values.password == "P@ss123") {
          alert("login success");
        }
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

  const handleChange = () => {
    // this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };
  

  return (
    <div className="App">
      <form className="form" noValidate onSubmit={formik.handleSubmit}>
        <Box
          id="invite-user-email"
          component="div"
          sx={{
            width: "100%",
            mb: 2.5,
          }}
        >
          <TextField
            error={Boolean(formik.touched.username && formik.errors.username)}
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
              maxWidth: { xs: "none", md: "443px" },
            }}
            fullWidth
          />
        </Box>
        <Box
          id="invite-user-last-name"
          component="div"
          sx={{
            width: "100%",
            mb: 2.5,
          }}
        >
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
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
              maxWidth: { xs: "none", md: "443px" },
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

        {/* <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          /> */}

        <Button type="submit" color="primary" className="form__custom-button">
          Log in
        </Button>
      </form>
    </div>
  );
}
export default Login;
