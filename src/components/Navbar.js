import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/tatvasoft_logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";
  const isHomePage = location.pathname === "/home";

  return (
    <Container>
      <Stack
        direction={["column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={2}
      >
        <Stack direction={"row"} justifyContent={"flex-start"}>
          <Link to="/">
            <img src={logo} alt="App logo" height={45} />
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          padding={[2, 0]}
        >
          {isLoginPage && (
            <>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="primary">
                  Login
                </Typography>
              </Link>
              <Typography variant="body1" color="primary">
                |
              </Typography>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="primary">
                  Register
                </Typography>
              </Link>
            </>
          )}

          {isHomePage && (
            <>
              <Link to="/update-user" style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="primary">
                  Update User
                </Typography>
              </Link>
            </>
          )}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Link
              to="/cart"
              style={{
                border: "1px solid #E4E4E4",
                padding: 5,
                textDecoration: "none",
                color: "#f14d54",
                borderRadius: 5,
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                spacing={1}
              >
                <ShoppingCartIcon color="primary" />0
                <Typography variant="body1" color={"black"}>
                  Cart
                </Typography>
              </Stack>
            </Link>

            {isHomePage && (
              <>
                <Link
                  to="/"
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Button variant="contained">Logout</Button>
                </Link>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
        style={{ height: 65, backgroundColor: "#F4F4F4" }}
      >
        <input
          type="text"
          placeholder="What are you looking for..."
          style={{
            fontFamily: "cursive",
            width: 400,
            height: 35,
            border: "1px solid #E4E4E4",
            fontSize: 18,
          }}
        />
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          startIcon={<SearchIcon />}
          style={{ color: "white" }}
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
