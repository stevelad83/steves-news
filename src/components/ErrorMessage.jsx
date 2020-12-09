import React from "react";

const ErrorMessage = (props) => {
  console.log("<==== rendered error message");
  return (
    <div className="error-message">
      <p>{props.errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
