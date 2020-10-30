import React from 'react';

const Button = ({ sortUsersByName, children }) => {
  console.log('RENDERIZOU NOVAMENTE O ACTION BUTTONS')
  return (
    <button onClick={sortUsersByName}>{children}</button>
  );
};

export default Button;
