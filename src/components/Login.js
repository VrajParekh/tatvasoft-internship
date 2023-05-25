import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          Login
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        margin={4}
      >
        <Typography variant="h3" fontSize={40}>
          Login or Create an Account
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={5}
      >
        <Stack
          direction={"column"}
          width={"45%"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Typography variant="body2" fontSize={20}>
              New Customer
              <hr />
            </Typography>

            <Typography variant="h4" fontSize={14} marginTop={2}>
              Registration is free and easy.
            </Typography>

            <ul>
              <li>
                <Typography variant="h6" fontSize={14}>
                  Faster checkout
                </Typography>
              </li>
              <li>
                <Typography variant="h6" fontSize={14}>
                  Save multiple shipping addresses
                </Typography>
              </li>
              <li>
                <Typography variant="h6" fontSize={14}>
                  View and track orders and more
                </Typography>
              </li>
            </ul>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            style={{ width: "220px", height: "45px" }}
          >
            Create an Account
          </Button>
        </Stack>

        <Stack
          direction={"column"}
          width={"45%"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Typography variant="body2" fontSize={20}>
              Registered Customers
              <hr />
            </Typography>

            <Typography variant="h4" fontSize={14} marginTop={2}>
              If you have an account with us, please log in.
            </Typography>

            <Typography variant="body1" marginTop={2} marginBottom={1}>
              Email Address *
            </Typography>

            <input
              type="email"
              style={{
                width: 400,
                height: 35,
                border: "1px solid #E4E4E4",
                fontSize: 18,
                padding: "0 15px",
              }}
            />

            <Typography variant="body1" marginTop={2} marginBottom={1}>
              Password *
            </Typography>

            <input
              type="password"
              style={{
                width: 400,
                height: 35,
                border: "1px solid #E4E4E4",
                fontSize: 18,
                padding: "0 15px",
              }}
            />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "220px", height: "45px", marginTop: "20px" }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Login;
