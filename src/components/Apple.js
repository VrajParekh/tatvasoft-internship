import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Apple = () => {
  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    Navigate("/");
  };
  return (
    <div>
      <div>Apple Page</div>
      <Button onClick={onHomePageButtonClick} variant="contained">
        Navigate to Home Page
      </Button>
    </div>
  );
};

export default Apple;
