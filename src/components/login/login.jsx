import React, { useState } from "react";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  Box,
  Button,
  TextField,
  useMediaQuery,
  MenuItem,
} from "@mui/material";
// import Button from "./components/Button";

function Login() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
        //   firstname: "",
        //   lastname: "",
          email: "",
          password: "",
        //   title: "",
        //   userType: "",
          submit: null,
        },
        validationSchema: Yup.object({
          firstname: Yup.string().required("First name is required"),
          lastname: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Email must be vaild")
            .required("Email is required"),
          phoneNumber: Yup.string().min(12, "Invalid format for the phone number"),
          title: Yup.string().required("Title is required"),
          userType: Yup.string().required("User Type is required"),
        }),
        onSubmit: async (values) => {
          try {
            const regData = {
              firstname: values.firstname,
              lastname: values.lastname,
              email: values.email,
              phone: values.phoneNumber.replaceAll("-", ""),
              userRole: values.title,
              userType: values.userType,
            };
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
        <form className="form">
    
            <Box
              id="invite-user-email"
              component="div"
              sx={{
                width: "100%",
                mb: 2.5,
              }}
            >
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                label="Email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.email}
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
                error={Boolean(
                  formik.touched.lastname && formik.errors.lastname
                )}
                helperText={formik.touched.lastname && formik.errors.lastname}
                variant="outlined"
                label="Last Name"
                name="lastname"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastname}
                sx={{
                  borderColor: "neutral.300",
                  maxWidth: { xs: "none", md: "443px" },
                }}
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

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );

}
export default Login;