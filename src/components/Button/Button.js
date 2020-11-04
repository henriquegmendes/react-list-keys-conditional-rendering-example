import React from 'react';

const Button = ({ sortUsersByName, children }) => {
  return (
    <button onClick={sortUsersByName}>{children}</button>
  );
};

export default Button;
