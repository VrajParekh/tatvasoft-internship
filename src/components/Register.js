import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorMessage from "./ValidationErrorMessage";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    roleId: Yup.number().required("Role is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters at minimum")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must be match."
      )
      .required("Confirm Password is required."),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    delete data.confirmPassword;
    try {
      const response = await axios.post(
        "https://book-e-sell-node-api.vercel.app/api/user",
        data
      );
      if (response.status === 200) {
        toast.success("API call is completed successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      }
      console.log("submitted", response);
    } catch (error) {
      console.error("Error submitting data:", error);
      if (error.response && error.response.status === 409) {
        toast.error("API call failed: Conflict", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        margin={4}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Typography variant="subtitle1">Home</Typography>
        </Link>
        <Typography variant="caption"> &gt; </Typography>

        <Typography variant="subtitle1" color="primary">
          Create an Account
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={4}
      >
        <Typography variant="h3" fontSize={40}>
          Create an Account
        </Typography>
      </Stack>

      <Typography variant="body2" fontSize={20}>
        Personal Information
        <hr />
      </Typography>

      <Typography variant="h5" fontSize={14}>
        Please enter the following information to create your account
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              marginBottom={5}
            >
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  First Name *
                </Typography>

                <input
                  type="text"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{
                    height: 35,
                    border: "1px solid #E4E4E4",
                    fontSize: 18,
                    padding: "0 15px",
                  }}
                />
                <ValidationErrorMessage
                  message={errors.firstName}
                  touched={touched.firstName}
                />
              </Stack>
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  Last Name *
                </Typography>

                <input
                  type="text"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{
                    height: 35,
                    border: "1px solid #E4E4E4",
                    fontSize: 18,
                    padding: "0 15px",
                  }}
                />
                <ValidationErrorMessage
                  message={errors.lastName}
                  touched={touched.lastName}
                />
              </Stack>
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  Email Address *
                </Typography>

                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{
                    height: 35,
                    border: "1px solid #E4E4E4",
                    fontSize: 18,
                    padding: "0 15px",
                  }}
                />
                <ValidationErrorMessage
                  message={errors.email}
                  touched={touched.email}
                />
              </Stack>
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  Roles
                </Typography>

                <Select
                  name="roleId"
                  value={values.roleId}
                  onChange={handleChange}
                  style={{
                    height: "36px",
                  }}
                >
                  <MenuItem value={2}>Seller</MenuItem>
                  <MenuItem value={3}>Buyer</MenuItem>
                </Select>
              </Stack>
            </Stack>

            <Typography variant="body2" fontSize={20}>
              Login Information
              <hr />
            </Typography>

            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              marginBottom={5}
            >
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  Password *
                </Typography>

                <input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{
                    height: 35,
                    border: "1px solid #E4E4E4",
                    fontSize: 18,
                    padding: "0 15px",
                  }}
                />
                <ValidationErrorMessage
                  message={errors.password}
                  touched={touched.password}
                />
              </Stack>
              <Stack width={"45%"}>
                <Typography variant="body1" marginTop={2} marginBottom={1}>
                  Confirm Password *
                </Typography>

                <input
                  type="password"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{
                    height: 35,
                    border: "1px solid #E4E4E4",
                    fontSize: 18,
                    padding: "0 15px",
                  }}
                />
                <ValidationErrorMessage
                  message={errors.confirmPassword}
                  touched={touched.confirmPassword}
                />
              </Stack>
            </Stack>

            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{
                width: "180px",
                height: "45px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Register
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
