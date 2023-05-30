import {
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
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
            style={{
              height: 35,
              border: "1px solid #E4E4E4",
              fontSize: 18,
              padding: "0 15px",
            }}
          />
        </Stack>
        <Stack width={"45%"}>
          <Typography variant="body1" marginTop={2} marginBottom={1}>
            Last Name *
          </Typography>

          <input
            type="text"
            style={{
              height: 35,
              border: "1px solid #E4E4E4",
              fontSize: 18,
              padding: "0 15px",
            }}
          />
        </Stack>
        <Stack width={"45%"}>
          <Typography variant="body1" marginTop={2} marginBottom={1}>
            Email Address *
          </Typography>

          <input
            type="email"
            style={{
              height: 35,
              border: "1px solid #E4E4E4",
              fontSize: 18,
              padding: "0 15px",
            }}
          />
        </Stack>
        <Stack width={"45%"}>
          <Typography variant="body1" marginTop={2} marginBottom={1}>
            Roles
          </Typography>

          <Select
            style={{
              height: "36px",
            }}
          >
            <MenuItem value="seller">Seller</MenuItem>
            <MenuItem value="buyer">Buyer</MenuItem>
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
            style={{
              height: 35,
              border: "1px solid #E4E4E4",
              fontSize: 18,
              padding: "0 15px",
            }}
          />
        </Stack>
        <Stack width={"45%"}>
          <Typography variant="body1" marginTop={2} marginBottom={1}>
            Confirm Password *
          </Typography>

          <input
            type="password"
            style={{
              height: 35,
              border: "1px solid #E4E4E4",
              fontSize: 18,
              padding: "0 15px",
            }}
          />
        </Stack>
      </Stack>

      <Button
        variant="contained"
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
    </Container>
  );
  // <Container className="container">
  //   <div className="heading">
  //     <h1>Login or Create an Account</h1>
  //   </div>
  //   <div className="info">
  //     <h4>Personal Information</h4>
  //     <hr />
  //     <h5>Please enter the following information to create your account</h5>
  //   </div>
  //   <div className="personalInfo">
  //     <div className="div1">
  //       <TextField
  //         id="outlined-basic"
  //         label="First name"
  //         variant="outlined"
  //         style={{ width: "40%", height: "50px" }}
  //       />
  //       <TextField
  //         id="outlined-basic"
  //         label="Last name"
  //         variant="outlined"
  //         style={{ width: "40%", height: "50px" }}
  //       />
  //     </div>
  //     <TextField
  //       id="outlined-basic"
  //       label="Email address"
  //       variant="outlined"
  //       style={{ width: "100%", height: "50px" }}
  //     />
  //   </div>
  //   <div className="info">
  //     <h4>Login Information</h4>
  //     <hr />
  //   </div>
  //   <div className="personalInfo">
  //     <div className="div1">
  //       <TextField
  //         id="outlined-basic"
  //         label="Password"
  //         variant="outlined"
  //         style={{ width: "40%", height: "50px" }}
  //       />
  //       <TextField
  //         id="outlined-basic"
  //         label="Confirm Password"
  //         variant="outlined"
  //         style={{ width: "40%", height: "50px" }}
  //       />
  //     </div>
  //   </div>
  //   <Button
  //     variant="contained"
  //     style={{ backgroundColor: "#f14d54", width: 136, height: 45 }}
  //   >
  //     Register
  //   </Button>
  // </Container>
};

export default Register;
