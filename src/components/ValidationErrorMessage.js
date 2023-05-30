import React from "react";

const ValidationErrorMessage = (props) => {
  return (
    <>
      {props.touched && (
        <p style={{ color: "red", fontSize: "15px", marginBottom: "1px" }}>
          {props.message}
        </p>
      )}
    </>
  );
};

export default ValidationErrorMessage;
