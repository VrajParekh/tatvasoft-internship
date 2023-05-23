import { Container, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/tatvasoft_logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <img src={logo} alt="LOGO" height={65} />
        <Typography style={{ color: "#b7b2b2" }}>Made with ❤️</Typography>
      </div>
    </Container>
  );
};

export default Footer;
