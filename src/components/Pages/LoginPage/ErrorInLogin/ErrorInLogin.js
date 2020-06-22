import React from 'react';

const ErrorInLogin = ({ title, message }) => {
  return (
    <div className="ui error message">
      <div className="header">{title}</div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorInLogin;
